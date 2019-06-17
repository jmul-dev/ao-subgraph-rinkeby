import { CreateName as CreateNameEvent } from "../../generated/NameFactory/NameFactory";
import { Name } from "../../generated/schema";

export function handleCreateName(event: CreateNameEvent): void {
	let entity = new Name(event.transaction.hash.toHex() + "-" + event.logIndex.toString());
	entity.ethAddress = event.params.ethAddress;
	entity.nameId = event.params.nameId;
	entity.index = event.params.index;
	entity.name = event.params.name;
	entity.save();
}
