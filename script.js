class Animal {
    constructor(name, type, isWarmBlooded, hasBackbone) {
      this.name = name;
      this.type = type;
      this.isWarmBlooded = isWarmBlooded;
      this.hasBackbone = hasBackbone;
    }
  
    displayInfo() {
      console.log(`${this.name} is a ${this.type} with the following characteristics:`);
      console.log(`Warm-blooded: ${this.isWarmBlooded}`);
      console.log(`Has backbone: ${this.hasBackbone}`);
      console.log('-----------------------------');
    }
  }
  
  class Anthropoda extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Anthropoda', isWarmBlooded, true);
    }
  }
  
  class Fish extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Fish', isWarmBlooded, true);
    }
  }
  
  class Amphibia extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Amphibia', isWarmBlooded, true);
    }
  }
  
  class Reptile extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Reptile', isWarmBlooded, true);
    }
  }
  
  class Aves extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Aves', isWarmBlooded, true);
    }
  }
  
  class Mammal extends Animal {
    constructor(name, isWarmBlooded) {
      super(name, 'Mammal', isWarmBlooded, true);
    }
  }
  
  // Example usage:
  const spider = new Anthropoda('Spider', false);
  const trout = new Fish('Trout', false);
  const frog = new Amphibia('Frog', false);
  const snake = new Reptile('Snake', false);
  

  console.log(spider)