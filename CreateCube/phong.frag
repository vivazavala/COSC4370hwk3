
#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;

void main()
{
    float amStren= 0.1;
    float spcStren= 0.5;
    ///

    vec3 amb= amStren*lightColor;
    vec3 norm= normalize(Normal);

    vec3 ltDirection= normalize(lightPos-FragPos);   ///fix 
    vec3 viDirection= normalize(viewPos-FragPos);
    vec3 rDirection= reflect(-ltDirection, norm);
    ///direc
    
    float diff= max(dot(norm, ltDirection), 0.0);
    vec3 diffuse= diff*lightColor;
    float spc= pow(max(dot(viDirection, rDirection), 0.0), 64);
    vec3 splar= spcStren*spc*lightColor;
    
    color= vec4((amb+diffuse+splar)*objectColor, 1.0);
   
   // TODO: Replace with your code...
   // If gl_Position was set correctly, this gives a totally red cube

} 
