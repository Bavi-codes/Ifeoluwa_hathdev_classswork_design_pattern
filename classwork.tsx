interface Transport {
    estimateCost(km: number): number
    deliver(cargo: string): void
  }
  
  
class Truck implements Transport {
    deliver(cargo: string): void{
        console.log("🚚 Delivering ${cargo} by road");
    }
    estimateCost(km: number): number {
    return km * this.costPerKm();
}
    costPerKm(): number {
    return 2;
}
}
abstract class Logistics {
    abstract initateTransport() : Transport
   
    planDelivery(cargo: string, km:number): void {
        const transport = this.initateTransport();
        
        console.log(`Planning delivery of ${cargo}...`);
        console.log(`Estimated cost: ${transport.estimateCost(km)}`)
        
        transport.deliver(cargo);
  }
}

class RoadLogistics extends Logistics {
  initateTransport(): Transport {
    return new Truck();
  }
}

const road = new RoadLogistics();
road.planDelivery("cement", 100);