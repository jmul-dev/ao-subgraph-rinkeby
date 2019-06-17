import {
  CreateName as CreateNameEvent,
  RewardContributor as RewardContributorEvent
} from "../generated/Contract/Contract"
import { CreateName, RewardContributor } from "../generated/schema"

export function handleCreateName(event: CreateNameEvent): void {
  let entity = new CreateName(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.ethAddress = event.params.ethAddress
  entity.nameId = event.params.nameId
  entity.index = event.params.index
  entity.name = event.params.name
  entity.save()
}

export function handleRewardContributor(event: RewardContributorEvent): void {
  let entity = new RewardContributor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.nameId = event.params.nameId
  entity.pathosAmount = event.params.pathosAmount
  entity.ethosAmount = event.params.ethosAmount
  entity.save()
}
