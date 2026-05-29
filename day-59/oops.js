class MobileShop{
    constructor(){
        this.mobiles = [];
    }

    addMobile(){};
    removeMobile(){};
}

class Mobile{
    constructor(brand,model,price,color){
        this.id = Math.floor(Math.random()* 100000);
        this.brand = brand;
        this.model = model;
        this.color = color ; 
        this.price = price; 
        this.sims = [];

    }
    getMobileinfo(){
        console.log(`${this.brand} - ${this.model} = ${this.price} - ${this.color}`);
        
    };
    insertSim(sim){
        if (this.sims.length ===2 ) {
            console.log("Sorry you have already inserted 2 sims");
            return;
        }
        this.sims.push(sim);
    }
}

class Sim{
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance;
    }

    addBalance(balance){
        if (balance < 0 ) {
            console.log("To add balance give amount greater than 0 ");
            return ;            
        }
        this.balance += balance;

    }
}
let myMobileShop = new MobileShop();
let samsung = new Mobile("Samsung","Galaxy",120000,"Black");
let tatadocomo = new Sim("TataDoCoMO",300);

samsung.insertSim(tatadocomo);
myMobileShop.addMobile(samsung);