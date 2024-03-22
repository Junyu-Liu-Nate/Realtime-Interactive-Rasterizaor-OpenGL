#pragma once

// Defined before including GLEW to suppress deprecation messages on macOS
#ifdef __APPLE__
#define GL_SILENCE_DEPRECATION
#endif
#include <GL/glew.h>
#include <glm/glm.hpp>

#include <unordered_map>
#include <QElapsedTimer>
#include <QOpenGLWidget>
#include <QTime>
#include <QTimer>

#include "render/renderscene.h"
#include "shapes/sphere.h"
#include "shapes/cube.h"
#include "shapes/cone.h"
#include "shapes/cylinder.h"
#include "shapes/mesh.h"
#include "settings.h"

class Realtime : public QOpenGLWidget
{
public:
    Realtime(QWidget *parent = nullptr);
    void finish();                                      // Called on program exit
    void sceneChanged();
    void settingsChanged();
    void saveViewportImage(std::string filePath);

public slots:
    void tick(QTimerEvent* event);                      // Called once per tick of m_timer

protected:
    void initializeGL() override;                       // Called once at the start of the program
    void paintGL() override;                            // Called whenever the OpenGL context changes or by an update() request
    void resizeGL(int width, int height) override;      // Called when window size changes

private:
    // ======= proj 5
    GLuint m_shader; // Stores id of shader program
    GLuint m_vbo; // Stores id of vbo
    GLuint m_vao; // Stores id of vao

    RenderData metaData;
    RenderScene renderScene;

    std::vector<std::vector<float>> shapeDataList;
    std::vector<glm::mat4> modelMatrixList;
    glm::mat4 m_view  = glm::mat4(1);
    glm::mat4 m_proj  = glm::mat4(1);

    std::vector<float> vboData; // Flat vector to store all the vertices and normals for the VBO.
    std::vector<int> shapeStartIndices; // Vector to store the starting index of each shape in the VBO.
    std::vector<int> shapeSizes; // Vector to store the number of elements (vertices+normals) of each shape.

    void setupShapeData();
    void setupLightData();
    std::vector<float> calculateDistanceFactors();
    void resetScene();

    int shapeParameter1Saved = settings.shapeParameter1;
    int shapeParameter2Saved = settings.shapeParameter2;
    QString texture_filepath_saved = QString::fromStdString("");

    // ======= proj 6
    QImage m_image;
    GLuint m_kitten_texture;
    GLuint m_texture; // Stores id of geometry texture mapping

    GLuint m_defaultFBO;
    int m_fbo_width;
    int m_fbo_height;
    int m_screen_width;
    int m_screen_height;

    GLuint m_texture_shader;
    GLuint m_fullscreen_vbo;
    GLuint m_fullscreen_vao;
    GLuint m_fbo;
    GLuint m_fbo_texture;
    GLuint m_fbo_renderbuffer;

    GLuint m_fxaa_shader;

    void generateScreen();
    void makeFBO();
    void paintTexture(GLuint texture);
    void paintGeometry();

    // ======= Others

    void keyPressEvent(QKeyEvent *event) override;
    void keyReleaseEvent(QKeyEvent *event) override;
    void mousePressEvent(QMouseEvent *event) override;
    void mouseReleaseEvent(QMouseEvent *event) override;
    void mouseMoveEvent(QMouseEvent *event) override;
    void timerEvent(QTimerEvent *event) override;

    // Tick Related Variables
    int m_timer;                                        // Stores timer which attempts to run ~60 times per second
    QElapsedTimer m_elapsedTimer;                       // Stores timer which keeps track of actual time between frames

    // Input Related Variables
    bool m_mouseDown = false;                           // Stores state of left mouse button
    glm::vec2 m_prev_mouse_pos;                         // Stores mouse position
    std::unordered_map<Qt::Key, bool> m_keyMap;         // Stores whether keys are pressed or not

    // Device Correction Variables
    int m_devicePixelRatio;
};
