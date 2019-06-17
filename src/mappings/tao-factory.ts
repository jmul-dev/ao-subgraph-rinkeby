import { CreateTAO as CreateTAOEvent } from "../../generated/TAOFactory/TAOFactory";
import { TAO } from "../../generated/schema";

export function handleCreateTAO(event: CreateTAOEvent): void {
	let entity = new TAO(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
	entity.advocateId = event.params.advocateId;
	entity.taoId = event.params.taoId;
	entity.index = event.params.index;
	entity.name = event.params.name;
	entity.parent = event.params.parent;
	entity.parentTypeId = event.params.parentTypeId;
	entity.save();
}
