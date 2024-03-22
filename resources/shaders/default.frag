#version 330 core

// Declare "in" variables for the world-space position and normal,
//         received post-interpolation from the vertex shader
in vec3 vertexWorldSpacePos;
in vec3 vertexWorldSpaceNormal;
in vec2 textureUV;

// Declare an out vec4 for your output color
out vec4 fragColor;

// Declare relevant uniform(s) here, for ambient lighting
uniform float ka;
uniform vec4 cAmbient;

// Declare relevant uniform(s) here, for diffuse lighting
uniform float kd;
uniform vec4 cDiffuse;

uniform float isTexture;
uniform float materialBlend;

uniform sampler2D textureImgMapping;

// Declare relevant uniform(s) here, for specular lighting
uniform vec4 cameraWorldSpacePos;
uniform float ks;
uniform float shininess;
uniform vec4 cSpecular;

uniform float lightTypes[8];
uniform vec3 lightColors[8];
uniform vec3 lightDirections[8];
uniform vec3 lightPositions[8];
uniform float lightAngles[8];
uniform float lightPenumbras[8];
uniform vec3 lightFunctions[8];

void main() {
    // Need to renormalize vectors here if you want them to be normalized

    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    // Add ambient component to output color
    fragColor.x += ka * cAmbient.x;
    fragColor.y += ka * cAmbient.y;
    fragColor.z += ka * cAmbient.z;

    for (int i = 0; i < 8; i++) {
        float att;
        vec3 surfaceToLight;
        float falloff = 0;

        if (lightTypes[i] == 0) {
            att = 1.0;
            surfaceToLight = normalize(-lightDirections[i]);
        }
        if (lightTypes[i] == 1) {
            float distanceToLight = length(vertexWorldSpacePos - lightPositions[i]);
            att = min(1.0, 1.0 / (lightFunctions[i].x + lightFunctions[i].y * distanceToLight + lightFunctions[i].z * distanceToLight * distanceToLight));
            surfaceToLight = normalize(lightPositions[i] - vertexWorldSpacePos);
        }
        if (lightTypes[i] == 2) {
            float distanceToLight = length(vertexWorldSpacePos - lightPositions[i]);
            att = min(1.0, 1.0 / (lightFunctions[i].x + lightFunctions[i].y * distanceToLight + lightFunctions[i].z * distanceToLight * distanceToLight));
            surfaceToLight = normalize(lightPositions[i] - vertexWorldSpacePos);

            vec3 l_out = normalize(vertexWorldSpacePos - lightPositions[i]);
            vec3 l_dir = normalize(lightDirections[i]);
            float xAngle = acos(clamp(dot(l_out,l_dir), 0.0f, 1.0f));
            float innerAngle = lightAngles[i] - lightPenumbras[i];
            if (xAngle > innerAngle && xAngle < lightAngles[i]) {
                falloff = -2 * pow((xAngle - innerAngle) / lightPenumbras[i], 3) + 3 * pow((xAngle - innerAngle) / lightPenumbras[i], 2);
            }
            if (xAngle >= lightAngles[i]) {
                falloff = 1;
            }
        }

        // Add diffuse component to output color
        float NdotL = dot(normalize(vertexWorldSpaceNormal), normalize(surfaceToLight));
        NdotL = clamp(NdotL, 0.0f, 1.0f);
        vec3 diffuseColor = kd * NdotL * vec3(cDiffuse);

        // Texture
        if (isTexture > 0) {
            vec4 textureColor = vec4(1);
            textureColor = texture(textureImgMapping, textureUV);
            diffuseColor = (materialBlend * vec3(textureColor) + (1.0 - materialBlend) * kd * vec3(cDiffuse)) * NdotL;
        }

        // Add specular component to output color
        vec3 reflect = normalize(-surfaceToLight) + 2 * NdotL * normalize(vertexWorldSpaceNormal);
        float specularDot = dot(normalize(reflect), normalize(cameraWorldSpacePos.xyz - vertexWorldSpacePos));
        specularDot = clamp(specularDot, 0.0f, 1.0f);
        vec3 specularColor;
        if (shininess == 0.0) {
            specularColor = ks * 1 * vec3(cSpecular);
        }
        else{
            specularColor = ks * pow(specularDot, shininess) * vec3(cSpecular);
        }

        fragColor.x += att * lightColors[i].x * (diffuseColor.x + specularColor.x) * (1-falloff);
        fragColor.y += att * lightColors[i].y * (diffuseColor.y + specularColor.y) * (1-falloff);
        fragColor.z += att * lightColors[i].z * (diffuseColor.z + specularColor.z) * (1-falloff);
    }

    fragColor.x = clamp(fragColor.x, 0.0f, 1.0f);
    fragColor.y = clamp(fragColor.y, 0.0f, 1.0f);
    fragColor.z = clamp(fragColor.z, 0.0f, 1.0f);
    fragColor.w = 1.0;
}
