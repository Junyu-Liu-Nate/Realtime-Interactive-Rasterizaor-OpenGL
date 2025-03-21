# Realtime Interactive Rasterizor - OpenGL

This project implements a realtime interactive rasterizator with 4 BRDFs, adaptive level of details, implicit/explicit shape rendering, advanced lightings, interactive camera control, FBOs, FXAA, etc. This project associates with Brown CSCI 2230 Computer Graphics course and all project handouts can be found [here](https://cs1230.graphics/projects).

## Part One: Lights, Camera

The handout for this part can be found [here](https://cs1230.graphics/projects/realtime/1).

### BRDFs

Run the program, open the specified `.json` file, follow the instructions to set the parameters, and save the image with the specified file name using the "Save image" button in the UI. It should automatically suggest the correct directory - again, be sure to follow the instructions in the left column to set the file name. Once you save the images, they will appear in the table below.

> If your program can't find certain files or you aren't seeing your output images appear, make sure to:<br/>
>
> 1. Set your working directory to the project directory
> 2. Clone the `scenefiles` submodule. If you forgot to do this when initially cloning this repository, run `git submodule update --init --recursive` in the project directory

<!-- > Note: once all images are filled in, the images will be the same size in the expected and student outputs. -->

|                                           File/Method To Produce Output                                            |                                                     Expected Output                                                     |                                                                     Your Output                                                                     |
| :----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
|                Input: `unit_cone.json`<br/>Output: `unit_cone.png`<br/>Parameters: (5, 5, 0.1, 100)                |      ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cone.png)      |            ![Place unit_cone.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cone.png)            |
|            Input: `unit_cone_cap.json`<br/>Output: `unit_cone_cap.png`<br/>Parameters: (5, 5, 0.1, 100)            |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cone_cap.png)    |        ![Place unit_cone_cap.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cone_cap.png)        |
|               Input: `unit_cube.json`<br/>Output: `unit_cube.png`<br/> Parameters: (5, 5, 0.1, 100)                |      ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cube.png)      |            ![Place unit_cube.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cube.png)            |
|            Input: `unit_cylinder.json`<br/>Output: `unit_cylinder.png`<br/>Parameters: (5, 5, 0.1, 100)            |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cylinder.png)    |        ![Place unit_cylinder.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cylinder.png)        |
|              Input: `unit_sphere.json`<br/>Output: `unit_sphere.png`<br/>Parameters: (5, 5, 0.1, 100)              |     ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_sphere.png)     |          ![Place unit_sphere.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_sphere.png)          |
|          Input: `unit_cone.json`<br/>Output: `unit_cone_min.png`<br/>Parameters: (**1**, **3**, 0.1, 100)          |      ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cone_min.png)      |        ![Place unit_cone_min.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cone_min.png)        |
|      Input: `unit_cone_cap.json`<br/>Output: `unit_cone_cap_min.png`<br/>Parameters: (**1**, **3**, 0.1, 100)      |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cone_cap_min.png)    |    ![Place unit_cone_cap_min.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cone_cap_min.png)    |
|          Input: `unit_cube.json`<br/>Output: `unit_cube_min.png`<br/>Parameters: (**1**, **1**, 0.1, 100)          |      ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cube_min.png)      |        ![Place unit_cube_min.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cube_min.png)        |
|      Input: `unit_cylinder.json`<br/>Output: `unit_cylinder_min.png`<br/>Parameters: (**1**, **3**, 0.1, 100)      |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_cylinder_min.png)    |    ![Place unit_cylinder_min.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_cylinder_min.png)    |
|        Input: `unit_sphere.json`<br/>Output: `unit_sphere_min.png`<br/>Parameters: (**2**, **3**, 0.1, 100)        |     ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/unit_sphere_min.png)     |      ![Place unit_sphere_min.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/unit_sphere_min.png)      |
|           Input: `parse_matrix.json`<br/>Output: `parse_matrix.png`<br/>Parameters: (**3**, 5, 0.1, 100)           |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/parse_matrix.png)     |         ![Place parse_matrix.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/parse_matrix.png)         |
|            Input: `ambient_total.json`<br/>Output: `ambient_total.png`<br/>Parameters: (5, 5, 0.1, 100)            |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/ambient_total.png)    |        ![Place ambient_total.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/ambient_total.png)        |
|            Input: `diffuse_total.json`<br/>Output: `diffuse_total.png`<br/>Parameters: (5, 5, 0.1, 100)            |    ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/diffuse_total.png)    |        ![Place diffuse_total.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/diffuse_total.png)        |
|           Input: `specular_total.json`<br/>Output: `specular_total.png`<br/>Parameters: (5, 5, 0.1, 100)           |   ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/specular_total.png)    |       ![Place specular_total.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/specular_total.png)       |
|              Input: `phong_total.json`<br/>Output: `phong_total.png`<br/>Parameters: (5, 5, 0.1, 100)              |     ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/phong_total.png)     |          ![Place phong_total.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/phong_total.png)          |
|      Input: `directional_light_1.json`<br/>Output: `directional_light_1.png`<br/>Parameters: (5, 5, 0.1, 100)      | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/directional_light_1.png) |  ![Place directional_light_1.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/directional_light_1.png)  |
| Input: `directional_light_2.json`<br/>Output: `directional_light_2.png`<br/>Parameters: (**10**, **10**, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/directional_light_2.png) |  ![Place directional_light_2.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/directional_light_2.png)  |
|      Input: `phong_total.json`<br/>Output: `phong_total_near_far.png`<br/>Parameters: (5, 5, **9.5**, **12**)      | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/phong_total_near_far.png) | ![Place phong_total_near_far.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/phong_total_near_far.png) |
|      Input: `directional_light_1.json`<br/>Output: `directional_light_1_near_far.png`<br/>Parameters: (**25**, **25**, **8**, **10**)      | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/lights-camera/required_outputs/directional_light_1_near_far.png) | ![Place directional_light_1_near_far.png in student_outputs/lights-camera/required folder](student_outputs/lights-camera/required/directional_light_1_near_far.png) |

### Design Choices

- **Camera data:** Calculation of view matrix and projection matrix is implemented in ```render/camera.cpp```
- **Shape implementations:** Shape implementations are in ```shapes/```. The implementation has been run in lab 8 to validate the correctness of discretization and normal calculation.
- **Shaders:** Shaders implementation and variable passing are implemented. One design choice to note is that only initializations are put in ```initializeGL()``` and value passing and updates are put in ```sceneChanged()```, to enable correct updating of scenefiles.
- **Tessellation:** Shape discretization changes with parameter toggles in all situations (including in adaptive level of detail).
- **Software engineering, efficiency, & stability:** 
  - Repeatable codes are packed into functions. 
  - When updating scenes or parameters, only necessary changes are computed.
  - When changing scenes, clean ip functions are called to clear scene objects.
  - The program can quickly render complex scenes like ```recursive_sphere_7.json```

<!-- ### Collaboration/References

I clarify that there is no collaboration include when I do this project.

### Known Bugs

Currently there are no known bugs. -->

### Extra Credit Features

#### Adaptive level of detail

- **Number of objects in the scene**

When number of objects is in the scene is more than 10, the discretization level would be scaled by factor ```1.0 / (log(0.1 * (renderScene.sceneMetaData.shapes.size() - 10) + 1) + 1)``` to have smooth decreasing when the descretization level when the number of objects in the scene is changing.

Note that the lower bound 10 can be changed and the scaling factor function can also be changed to ```1.0 / (log(0.1 * (renderScene.sceneMetaData.shapes.size() - lower_bound) + 1) + 1)```. In addition, there is a commented out fixed factor 0.5 if user need to use this simplified version.

| File/Method To Produce Output |                                                     Whole Image | Zoom In |
| :----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `recursive_sphere_2.json`<br/>Output: `recursive_sphere_2.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_2.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_2_zoom.png)   |
| Input: `recursive_sphere_3.json`<br/>Output: `recursive_sphere_3.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_3.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_3_zoom.png)   |
| Input: `recursive_sphere_4.json`<br/>Output: `recursive_sphere_4.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_4.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_4_zoom.png)   |
| Input: `recursive_sphere_5.json`<br/>Output: `recursive_sphere_5.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_5.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_5_zoom.png)   |
| Input: `recursive_sphere_6.json`<br/>Output: `recursive_sphere_6.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_6.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_6_zoom.png)   |
| Input: `recursive_sphere_7.json`<br/>Output: `recursive_sphere_7.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_7.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_7_zoom.png)   |
| Input: `recursive_sphere_8.json`<br/>Output: `recursive_sphere_8.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_8.png)      |  ![](student_outputs/lights-camera/extra_credit/numOfObj/numOfObj_8_zoom.png)   |


- **Distance from the object to the camera**

The discretization parameters are scaled by ```calculateDistanceFactors()```, in which the minimum distance ```minDistance``` of all the shapes in a scene is calculated and the discretization parameters for all other primitives are scaled by ```1 / (distance / minDistance)```. Note that after the scaling, the lower bound of discretization parameters is checked to ensure that the distant primitives have reasonable shapes.

The table below shows the comparison of ```extra_credit2``` turned off and on. When turned on, more distant spheres show fewer discretizations than nearer ones. When turned off, they have the same discretization levels.

| File/Method To Produce Output |                                                     Tunred off | Tunred on |
| :----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `recursive_sphere_5.json`<br/>Output: `recursive_sphere_5.png`<br/>Parameters: (25, 25, 0.1, 100)|      ![](student_outputs/lights-camera/extra_credit/distanceObj/off.png)      |  ![](student_outputs/lights-camera/extra_credit/distanceObj/on.png)   |

#### Custom Scene File

This custom scene file resembles a robot car with sensors like eyes.

|                                           File/Method To Produce Output                                            |                                                                                                             Your Output                                                                     |
| :----------------------------------------------------------------------------------------------------------------: |:-------------------------------------------------------------------------------------------------------------------------------------------------: |
|Input: `custom_scene_file.json`<br/>Output: `custom_scene_file.png`<br/>Parameters: (25, 25, 0.1,100) | ![](student_outputs/lights-camera/extra_credit/custom_scene_file.png)            |

#### Mesh Rendering

- Implemented my own .obj file reader from scratch.
- Can handle .obj files that explicitly specifies ```vn``` info (e.g., the ```dragon_mesh.obj```) and files that doesn't explicitly provide them (e.g., the ```bunny_mesh.obj```). In the later situation, the .obj reader function automatically calculates the vertex normals.

|                                           File/Method To Produce Output                                            |                                                                                                             Your Output                                                                     |
| :----------------------------------------------------------------------------------------------------------------: |:-------------------------------------------------------------------------------------------------------------------------------------------------: |
|Input: `bunny_mesh.json`<br/>Output: `bunny_mesh.png`<br/>Parameters: (5, 5, 0.1,100) | ![](student_outputs/lights-camera/extra_credit/bunny_mesh.png)            |
|Input: `dragon_mesh.json`<br/>Output: `dragon_mesh.png`<br/>Parameters: (5, 5, 0.1,100) | ![](student_outputs/lights-camera/extra_credit/dragon_mesh.png)            |


## Part Two: Interactve Control and FBO

The handout for this part can be found [here](https://cs1230.graphics/projects/realtime/2).

### Advanced Lighting, Interavtve Camera Control, and FBOs

> [!IMPORTANT]
> Before generating expected outputs, make sure to:
>
> 1. Set your working directory to the project directory
> 2. From the project directory, run `git submodule update --recursive --remote` to update the `scenefiles` submodule.
> 3. Change all instances of `"action"` in `mainwindow.cpp` to `"action"` (there should be 2 instances, one in `MainWindow::onUploadFile` and one in `MainWindow::onSaveImage`).

Run the program, open the specified `.json` file and follow the instructions to set the parameters.

<!-- If the output you are generating is an image, save the image with the specified file name using the "Save image" button in the UI. Be sure to follow the instructions in the left column to set the file name. Once you save the images, they will appear in the table below.

If the output you are generating is a video, reference the [Screen Recording Guide](https://cs1230.graphics/docs/screen-recording) to capture a video of the specified interaction. Once you've recorded everything, navigate to this template file in Github, click edit, and either select or drag-and-drop each of your videos into the correct location. This will upload them to GitHub (but not include them in the repo) and automatically embed them into this Markdown file by providing a link. Make sure to double-check that they all show up properly in the preview.

We're **not** looking for your video to **exactly** match the expected output (i.e. draw the exact same shape). Just make sure to follow the instructions and verify that the recording fully demonstrates the functionality of that part of your project. -->

<!-- > [!NOTE]
> There may be issues with the image saving functionality, and the images may not save the exact same way as the expected outputs. This is acceptable, as long as your output demonstrates correct functionality. -->

**Note that some of the output images seems that the camera is moved a bit, but the on-screen results are exactly the same as the expected output. This can be checked in demonstration.**

#### Point and Spot Lights

|                                File/Method To Produce Output                                 |                                                Expected Output                                                 |                                                       Your Output                                                       |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| Input: `point_light_1.json`<br/>Output: `point_light_1.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/point_light_1.png) | ![Place point_light_1.png in student_outputs/action/required folder](student_outputs/action/required/point_light_1.png) |
| Input: `point_light_2.json`<br/>Output: `point_light_2.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/point_light_2.png) | ![Place point_light_2.png in student_outputs/action/required folder](student_outputs/action/required/point_light_2.png) |
| Input: `spot_light_1.json`<br/>Output: `spot_light_1.png`<br/> Parameters: (5, 5, 0.1, 100)  | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/spot_light_1.png)  |  ![Place spot_light_1.png in student_outputs/action/required folder](student_outputs/action/required/spot_light_1.png)  |
|  Input: `spot_light_2.json`<br/>Output: `spot_light_2.png`<br/>Parameters: (5, 5, 0.1, 100)  | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/spot_light_2.png)  |  ![Place spot_light_2.png in student_outputs/action/required folder](student_outputs/action/required/spot_light_2.png)  |

#### Invert

<!-- > [!NOTE]
> If you did not implement the invert filter, you can skip this section. -->

|                                                      File/Method To Produce Output                                                      |                                                      Expected Output                                                      |                                                                  Your Output                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `primitive_salad_1.json`<br/>**Apply invert filter**<br/>Output: `primitive_salad_1_invert.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/primitive_salad_1_invert.png) | ![Place primitive_salad_1_invert.png in student_outputs/action/required folder](student_outputs/action/required/primitive_salad_1_invert.png) |

#### Grayscale

<!-- > [!NOTE]
> If you did not implement the grayscale filter, you can skip this section. -->

|                                                         File/Method To Produce Output                                                         |                                                       Expected Output                                                        |                                                                     Your Output                                                                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `primitive_salad_1.json`<br/>**Apply grayscale filter**<br/>Output: `primitive_salad_1_grayscale.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/primitive_salad_1_grayscale.png) | ![Place primitive_salad_1_grayscale.png in student_outputs/action/required folder](student_outputs/action/required/primitive_salad_1_grayscale.png) |

<!-- > [!WARNING]
> Kernel-based filters might not work the same on different devices. This is explained in more detail in the project handout. If your output doesn't seem to quite match our output but you think your implementation is correct, be sure to let your mentor know. -->

<!-- #### Sharpen

> [!NOTE]
> If you did not implement the sharpen filter, you can skip this section.

|                                                        File/Method To Produce Output                                                        |                                                       Expected Output                                                       |                                                                    Your Output                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `recursive_sphere_4.json`<br/>**Apply sharpen filter**<br/>Output: `recursive_sphere_4_sharpen.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/recursive_sphere_4_sharpen.png) | ![Place recursive_sphere_4_sharpen.png in student_outputs/action/required folder](student_outputs/action/required/recursive_sphere_4_sharpen.png) | -->

#### Blur

<!-- > [!NOTE]
> If you did not implement the blur filter, you can skip this section. -->

|                                                     File/Method To Produce Output                                                     |                                                     Expected Output                                                      |                                                                 Your Output                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `recursive_sphere_4.json`<br/>**Apply blur filter**<br/>Output: `recursive_sphere_4_blur.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/recursive_sphere_4_blur.png) | ![Place recursive_sphere_4_blur.png in student_outputs/action/required folder](student_outputs/action/required/recursive_sphere_4_blur.png) |

#### Camera Translation

_Instructions:_ Load `chess.json`. For about 1 second each in this order, press:

- <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, <kbd>D</kbd> to move in each direction by itself
- <kbd>W+A</kbd> to move diagonally forward and to the left
- <kbd>S+D</kbd> to move diagonally backward and to the right
- <kbd>Space</kbd> to move up
- <kbd>Cmd/Ctrl</kbd> to move down

##### Expected Output

https://github.com/BrownCSCI1230/projects_realtime_template/assets/45575415/710ff8b4-6db4-445b-811d-f6c838741e67

##### Your Output



https://github.com/BrownCSCI1230/projects-realtime-Junyu-Liu-Nate/assets/75256586/30840054-6e2e-41e8-82ef-5e075d0e6578


<!---
Paste your output on top of this comment!
-->

#### Camera Rotation

_Instructions:_ Load `chess.json`. Take a look around!

##### Expected Output

https://github.com/BrownCSCI1230/projects_realtime_template/assets/45575415/a14f4d32-88ee-4f5f-9843-74dd5c89b9dd

##### Your Output



https://github.com/BrownCSCI1230/projects-realtime-Junyu-Liu-Nate/assets/75256586/e1aae45a-7acc-4a1f-94ce-6047a99a4549


<!---
Paste your output on top of this comment!
-->

### Design Choices

#### Efficency Optimization

- Scene objects are regenerated only when Param1 and Param2 are changed.
- No inverse and transpase are calculated in vertex shader. The normal matrix is precomputed as uniforms and passed to vertex shader.
- Texture images are reloaded only when the texture image filepath is changed.

#### Software Engineering

- Error conditions (e.g., non-exist texture files) are properly handled and can produce results without crashing.
- Common codes are wrappoed into functions to reduce redundancy.
- Code are properly annotated with explanations of key steps.


### Known Bugs

The main bug is in texture mapping. The textures which in the edge regions of a texture image show inaccurate uv location and results in some high-frequency aliasing. I have ensure that all clampings are properly used, but it seems that the rounding error of vertex positions may cause such issue.

### Extra Credit Features

#### More filters

Gray scale filter and solbel filter are implemented as extra filters for per-pixel and multi-stage filter.

|                                                     Perpixel - Grayscale                                                      |                                                                 Multi-Stage Filter - Sobel filter                                                                 |
| :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| ![](student_outputs/action/required/primitive_salad_1_grayscale.png) | ![](student_outputs/action/extra_credit/primitive_salad_1_sobel.png) |
| ![](student_outputs/action/extra_credit/recursive_sphere_4_gray.png) | ![](student_outputs/action/extra_credit/recursive_sphere_4_sobel.png) |


#### Texture mapping

Texture mapping is implemented by adding uv coordinates to VBO and fetching texture image color in Phong illumination model.

|                                                     Primitive Type                                                     |                                                     Single                                                      |                                                                 Multiple                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| Sphere | ![](student_outputs/action/extra_credit/texture_sphere.png) | ![](student_outputs/action/extra_credit/texture_sphere2.png) |
| Cube | ![](student_outputs/action/extra_credit/texture_cube.png) | ![](student_outputs/action/extra_credit/texture_cube2.png) |
| Cyliner | ![](student_outputs/action/extra_credit/texture_cyl.png) | ![](student_outputs/action/extra_credit/texture_cyl2.png) |
| Cone | ![](student_outputs/action/extra_credit/texture_cone.png) | ![](student_outputs/action/extra_credit/texture_cone2.png) |

#### Fast Approximate Anti-Aliasing

The FXAA is implemented with the following steps:
1. Luminance Calculation: Compute the luminance of the current pixel and its neighbors.
2. Edge Detection: Detect edges by comparing luminance differences.
3. Sub-Pixel Anti-Aliasing: Incorporate finer details by considering sub-pixel variances.
4. Edge Direction Determination: Calculate the gradient to determine edge direction.
5. Anti-Aliasing Blend: Blend colors along the detected edges based on the edge direction and strength.

The difference is obvious if zoomed in. Also, it's obvious in live demonstration.

|  File                                                   |                                                     No FXAA                                                      |                                                                 With FXAA                                                                 |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: |
| ```primitive_salad_1.json``` | ![](student_outputs/action/required/primitive_salad_1.png) | ![](student_outputs/action/extra_credit/primitive_salad_1_FXAA.png) |
| ```recursive_sphere_4.json``` | ![](student_outputs/action/required/recursive_sphere_4.png) | ![](student_outputs/action/extra_credit/recursive_sphere_4_FXAA.png) |
| Cyliner | ![](student_outputs/action/extra_credit/texture_cyl2.png) | ![](student_outputs/action/extra_credit/texture_cyl2_FXAA.png) |