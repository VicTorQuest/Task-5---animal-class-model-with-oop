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
  const butterfly = new Anthropoda('butterfly', false);
  const tilapia = new Fish('tilapia', false);
  const frog = new Amphibia('Frog', false);
  const tortoise = new Reptile('tortoise', false);
  const bird = new Aves('bird', true);
  const cat = new Mammal('cat', true);
  

  console.log(butterfly)
  console.log(tilapia)
  console.log(frog)
  console.log(tortoise)
  console.log(bird)
  console.log(cat)