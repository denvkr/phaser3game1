class MyConf extends Phaser.Core.Config {
    static sceneConfig() {
      return {
              preload: 'preload',
              create: 'create',
              update: 'update',
              collectStar: 'collectStar',
              key: 'scene1'
      };
    }
    constructor(GameConfig) {
        // Здесь вызывается конструктор родительского класса,
        // в который передаётся свойство length в качестве
        // аргументов, соответствующих полям width и height,
        // класса Polygon
console.log(GameConfig);
        if ( !GameConfig || Object.keys(GameConfig) === 0 ) {
    GameConfig = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: true
            }
        },
        scene: MyConf.sceneConfig
    };
}
        var sceneConfig = MyConf.sceneConfig;
        console.log(sceneConfig);
        super(GameConfig);
        // Примечание:
        // В конструкторе класса, метод super() должен быть вызван
        // перед использованием this. В противном случае, будет
        // выброшена ошибка.
    }
}
export {MyConf as default};//default function() {}