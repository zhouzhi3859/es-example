// 导入元数据支持
import 'reflect-metadata';

// 存放所有可以被作为依赖项的类
function Injectable() {
  return function<T>(target: T) {
    console.log('target', target);
    const types: Array<Function> = Reflect.getMetadata('design:paramtypes', target);
    if (types) {
      const paramPrototypes = types.map(type => {
        console.log('type', type);
        return type;
      });
      Reflect.defineMetadata('inject:target:constructor', paramPrototypes, target);
    }
  };
}

@Injectable()
class AService {
  constructor(a: number) {
    console.log('a', a);
  }
}

@Injectable()
class BService {
  constructor(private b: AService) {
    console.log('b', this.b);
  }
}

new BService(new AService(1));
