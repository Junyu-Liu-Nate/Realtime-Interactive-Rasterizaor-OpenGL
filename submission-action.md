## Project 6: Action!

Please fill this out for Action! only. The project handout can be found [here](https://cs1230.graphics/projects/realtime/2).

### Output Comparison

> [!IMPORTANT]
> Before generating expected outputs, make sure to:
>
> 1. Set your working directory to the project directory
> 2. From the project directory, run `git submodule update --recursive --remote` to update the `scenefiles` submodule.
> 3. Change all instances of `"action"` in `mainwindow.cpp` to `"action"` (there should be 2 instances, one in `MainWindow::onUploadFile` and one in `MainWindow::onSaveImage`).

Run the program, open the specified `.json` file and follow the instructions to set the parameters.

If the output you are generating is an image, save the image with the specified file name using the "Save image" button in the UI. Be sure to follow the instructions in the left column to set the file name. Once you save the images, they will appear in the table below.

If the output you are generating is a video, reference the [Screen Recording Guide](https://cs1230.graphics/docs/screen-recording) to capture a video of the specified interaction. Once you've recorded everything, navigate to this template file in Github, click edit, and either select or drag-and-drop each of your videos into the correct location. This will upload them to GitHub (but not include them in the repo) and automatically embed them into this Markdown file by providing a link. Make sure to double-check that they all show up properly in the preview.

We're **not** looking for your video to **exactly** match the expected output (i.e. draw the exact same shape). Just make sure to follow the instructions and verify that the recording fully demonstrates the functionality of that part of your project.

> [!NOTE]
> There may be issues with the image saving functionality, and the images may not save the exact same way as the expected outputs. This is acceptable, as long as your output demonstrates correct functionality.

**Note that some of the output images seems that the camera is moved a bit, but the on-screen results are exactly the same as the expected output. This can be checked in demonstration.**

#### Point and Spot Lights

|                                File/Method To Produce Output                                 |                                                Expected Output                                                 |                                                       Your Output                                                       |
| :------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| Input: `point_light_1.json`<br/>Output: `point_light_1.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/point_light_1.png) | ![Place point_light_1.png in student_outputs/action/required folder](student_outputs/action/required/point_light_1.png) |
| Input: `point_light_2.json`<br/>Output: `point_light_2.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/point_light_2.png) | ![Place point_light_2.png in student_outputs/action/required folder](student_outputs/action/required/point_light_2.png) |
| Input: `spot_light_1.json`<br/>Output: `spot_light_1.png`<br/> Parameters: (5, 5, 0.1, 100)  | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/spot_light_1.png)  |  ![Place spot_light_1.png in student_outputs/action/required folder](student_outputs/action/required/spot_light_1.png)  |
|  Input: `spot_light_2.json`<br/>Output: `spot_light_2.png`<br/>Parameters: (5, 5, 0.1, 100)  | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/spot_light_2.png)  |  ![Place spot_light_2.png in student_outputs/action/required folder](student_outputs/action/required/spot_light_2.png)  |

#### Invert

> [!NOTE]
> If you did not implement the invert filter, you can skip this section.

|                                                      File/Method To Produce Output                                                      |                                                      Expected Output                                                      |                                                                  Your Output                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `primitive_salad_1.json`<br/>**Apply invert filter**<br/>Output: `primitive_salad_1_invert.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/primitive_salad_1_invert.png) | ![Place primitive_salad_1_invert.png in student_outputs/action/required folder](student_outputs/action/required/primitive_salad_1_invert.png) |

#### Grayscale

> [!NOTE]
> If you did not implement the grayscale filter, you can skip this section.

|                                                         File/Method To Produce Output                                                         |                                                       Expected Output                                                        |                                                                     Your Output                                                                     |
| :-------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `primitive_salad_1.json`<br/>**Apply grayscale filter**<br/>Output: `primitive_salad_1_grayscale.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/primitive_salad_1_grayscale.png) | ![Place primitive_salad_1_grayscale.png in student_outputs/action/required folder](student_outputs/action/required/primitive_salad_1_grayscale.png) |

> [!WARNING]
> Kernel-based filters might not work the same on different devices. This is explained in more detail in the project handout. If your output doesn't seem to quite match our output but you think your implementation is correct, be sure to let your mentor know.

#### Sharpen

> [!NOTE]
> If you did not implement the sharpen filter, you can skip this section.

|                                                        File/Method To Produce Output                                                        |                                                       Expected Output                                                       |                                                                    Your Output                                                                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: |
| Input: `recursive_sphere_4.json`<br/>**Apply sharpen filter**<br/>Output: `recursive_sphere_4_sharpen.png`<br/>Parameters: (5, 5, 0.1, 100) | ![](https://raw.githubusercontent.com/BrownCSCI1230/scenefiles/main/action/required_outputs/recursive_sphere_4_sharpen.png) | ![Place recursive_sphere_4_sharpen.png in student_outputs/action/required folder](student_outputs/action/required/recursive_sphere_4_sharpen.png) |

#### Blur

> [!NOTE]
> If you did not implement the blur filter, you can skip this section.

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

### Collaboration/References

I clarify that there is no collaboration include when I do this project.

Reference for FXAA implementation steps:
- https://en.wikipedia.org/wiki/Fast_approximate_anti-aliasing#:~:text=%23%20%E3%80%902%E2%80%A0Fast%20approximate%20anti,3

### Known Bugs

The main bug is in texture mapping. The textures which in the edge regions of a texture image show inaccurate uv location and results in some high-frequency aliasing. I have ensure that all clampings are properly used, but it seems that the rounding error of vertex positions may cause such issue.

### Extra Credit

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
