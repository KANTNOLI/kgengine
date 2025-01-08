export const BasicMaterial = (
  visual = {
    color: 0xffffff,
    map: null,
    lightMap: null,
    lightMapIntensity: 1,
    aoMap: null,
    aoMapIntensity: 1,
    specularMap: null,
    alphaMap: null,
    envMap: null,
  },
  additional = {
    combine: THREE.MultiplyOperation,
    reflectivity: 1,
    refractionRatio: 0.98,
  },
  admin = {
    wireframe: false,
    wireframeLinewidth: 1,
  },
  animate = {
    skinning: false,
    morphTargets: false,
  }
) => {
  return new THREE.MeshBasicMaterial({
    color: visual.color, // Цвет материала, значение по умолчанию 0xffffff (белый)
    map: visual.map, // Текстура объекта, значение по умолчанию null
    lightMap: visual.lightMap, // Текстура световой карты, значение по умолчанию null
    lightMapIntensity: visual.lightMapIntensity, // Интенсивность световой карты, значение по умолчанию 1
    aoMap: visual.aoMap, // Текстура карты окружающего освещения, значение по умолчанию null
    aoMapIntensity: visual.aoMapIntensity, // Интенсивность окружающего освещения, значение по умолчанию 1
    specularMap: visual.specularMap, // Текстура карты бликов, значение по умолчанию null
    alphaMap: visual.alphaMap, // Текстура альфа-карты, значение по умолчанию null
    envMap: visual.envMap, // Текстура окружающей среды, значение по умолчанию null

    combine: additional.combine, // Режим комбинирования с envMap, значение по умолчанию THREE.MultiplyOperation
    reflectivity: additional.reflectivity, // Коэффициент отражения, значение по умолчанию 1
    refractionRatio: additional.refractionRatio, // Коэффициент преломления, значение по умолчанию 0.98

    wireframe: admin.wireframe, // Режим каркаса, значение по умолчанию false
    wireframeLinewidth: admin.wireframeLinewidth, // Ширина линий каркаса, значение по умолчанию 1

    skinning: animate.skinning, // Включение скининга, значение по умолчанию false
    morphTargets: animate.morphTargets, // Включение морфинг-целей, значение по умолчанию false
  });
};
