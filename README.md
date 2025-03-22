## The documentation has also been updated today

> Если вам нравится моя задумка, буду рад вашей поддержке ввиде звёздочки) Тем самым Я буду знать, что делаю это не просто для себя, спасибо!

### This project was created for the convenience of working with 3D elements. The project is based on THREE.js is a more generalized and simpler version to work with. It has snippets, ready-made components, and default values that don't need to be specified every time.
### Этот проект создан для удобства работы с 3Д элементами. Проект работает на базе THREE.js и представляет из себя более обобщенную и простую версию для работы. В ней есть сниппеты, готовые компоненты и значения по умолчанию, которые не нужно каждый раз прописывать. 

###  **Plan**
- Animation - Do a repeat and reverse repeat during a cycle + number of cycles
- Documentation


### Update v0.10.3
This update includes a solution to a problem that I have not found on the Internet. If you don't use React, then you might encounter a problem with CSS3 and WebGL, because these are cornyly different scenes with an overlay... 

I went through about probably a billion solutions to this problem, even tried Plane Cutting, but nothing solved my problem, it would just cut out the full part of the model or object, but did not cut out a specific part inside the cube, (Even libraries such as CMS did not seem to help)

My approach implies the following:

When creating a CSS3 object, a WebGL Plane is created behind it with a width and height of a duplicate HTML CSS3 object and has a property (FrontSize), which prevents the HTML from being redrawn. 

Next, we analyze the difference from the camera to the angles of our copy of HTML, and our PLANE has to work with it.

And in the end, we create a shader for the model without changing its texture, without affecting the appearance of the model in any way, and using an algorithm I created from scratch without AI, we analyze whether the pixel of the model is in the range of our cube (And we create a cube that expands taking into account the camera difference to a plane - which becomes the front part of the cube) using this method, we can use HTML in a CSS3 scene! I will be very happy if you put a star on it, I have killed 2 weeks of my life for this, I have not seen any alternative options and I hope I will help someone because I am doing all my projects in Open Resources for the benefit of humanity!

> RU

Данное обновление включает решение задачи, решение которой я так и не нашел на просторах интернета. Если вы не используете React, то вы могли столкнуться с проблемой с работой CSS3 и WebGL, потому что это банально разные сцены с наложением... 

Я перебрал около наверное миллиарда вариантов решения этой задачи, даже пробовал Plane Cutting, но все не решало мою проблему, это бы просто вырезало полную часть модели или обьекта, но не  вырезала конкретную часть внутри куба, (Даже библиотеки такие как CMS вроде, не помогли)

Мой подход подразумевает следующее:

При создании CSS3 обьекта, за ним создается WebGL Plane с шириной и высотой дублирующий HTML CSS3  обьект и имеет свойство (FrontSize), что не дает перерисовки HTML. 

Далее мы анализируем разницу от камеры до углов нашей копии HTML, у нашего PLANE для работы с ним

А под конец, мы создаем шейдер для модели не меняя ее текстуру, вообще никак не влияя на внешний вид модели и анализируем мной созданным алгоритмом с нуля без ИИ, находиться ли пиксель модели в диапазоне нашего куба (А мы создаем куб который расширяется с учетом разницы камеры до plane - который становится лицевой частью куба), таким методом мы можем использовать HTML в CSS3 сцене! Я буду очень рад, если вы поставите звезду, я убил на это 2 недели моей жизни, альтернативных вариантов я не видел и надеюсь я помогу кому то т.к. делаю все свои проекты в Опен Сурс для блага человечества! 

![image](https://github.com/user-attachments/assets/e79434ee-bfad-4107-acf2-90cf293f70fc)


> **NPM** -> https://www.npmjs.com/package/kgengine
>
> **GitHub** -> https://github.com/KANTNOLI/KGEngine
> 
> **WIKI documentation** -> https://github.com/KANTNOLI/KGEngine/wiki (Process)
> 
> **Testing site** -> https://kantnoli.github.io/KGEngine/
>
> **If you have any ideas** -> https://t.me/KANTNOLI
