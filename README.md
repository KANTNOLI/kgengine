## ВРЕМЕННО БЕЗ РАЗРАБОКИ +- неделя


## To be honest, I do not even know how to describe this project. Ideally, I would like to implement a convenient engine or API for creating 3D websites or even games, rather even the latter
## Честно говоря, я даже не знаю как описать этот проект. В идеале мне бы хотелось реализовать удобный движок или апи для создания 3D сайтов или даже игр, скорее даже второе

> At the moment, I am describing the Three library at a high level.js, so that in the future it would be easier for me to work with it to draw something, because it is now the most relevant for 3D page rendering and is actively supported!

> На данный момент я описываю высокоуровнево  библиотеку Three.js, чтобы в дальнейшем мне было легче с ней работать для отрисовки чего либо, т.к. она сейчас самая актуальная для 3D отрисовки страницы и активно поддерживается! 

# **Immediate plans | Ближайшие планы**
- The most important thing is to make a normal description of the library. THREE.js **(The description makes it better)**
- Preparation of assets for basic tests
- Then there are even more ambitious plans, specifically to add other libraries! starting with object collisions, etc.

- Самое главное, сделать нормальное описание библиотеки THREE.js **(Описание позволяет лучше)**
- Заготовка ассетов для базовых тестов
- Далее уже еще более масштабные планы, конкретно же добавлять другие библиотеки! начиная с столкновений объектов и т.д

## Last update | Последнее обновление 

> Right now, I'm busy with the most difficult thing so far, creating text and models in the scene. I've already managed this, but it's still far from ideal, the next step is to adjust the classes and combine logically set functions, for example, add a position change

> Cейчас я занят пока что с самым сложным, созданием текста и моделей в сцене. Я уже справился с этим, но до идеала ещё далеко, следующий шаг это корректировать классы и объединить логически гет сет функции, например добавить изменение позиции

**Example using the last function | Пример использование последний функций**

```javascript
 text + model.addToScene(scene) // add to actual scene (PROMISE)  
 text + model.updatePosition(position) // Update position realTime (rotate, positions...)
 text + model.switchingShadow(void) // switch shadow mode on\off  
 text.updateText(text, visual, path); // Update text realTime (Font, style and text)
});
model.addScene(scene);
model.setOrbitControll(playerControlls);
model.setObjectLook(light);
```

![image](https://github.com/user-attachments/assets/ed097fbc-0ad2-43fa-a540-fa0ea2d09448)

