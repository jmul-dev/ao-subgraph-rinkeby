// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
	EthereumCall,
	EthereumEvent,
	SmartContract,
	EthereumValue,
	JSONValue,
	TypedMap,
	Entity,
	EthereumTuple,
	Bytes,
	Address,
	BigInt
} from "@graphprotocol/graph-ts";

export class CreateTAO extends EthereumEvent {
	get params(): CreateTAO__Params {
		return new CreateTAO__Params(this);
	}
}

export class CreateTAO__Params {
	_event: CreateTAO;

	constructor(event: CreateTAO) {
		this._event = event;
	}

	get advocateId(): Address {
		return this._event.parameters[0].value.toAddress();
	}

	get taoId(): Address {
		return this._event.parameters[1].value.toAddress();
	}

	get index(): BigInt {
		return this._event.parameters[2].value.toBigInt();
	}

	get name(): string {
		return this._event.parameters[3].value.toString();
	}

	get parent(): Address {
		return this._event.parameters[4].value.toAddress();
	}

	get parentTypeId(): i32 {
		return this._event.parameters[5].value.toI32();
	}
}

export class TAOFactory__getTAOResult {
	value0: string;
	value1: Address;
	value2: string;
	value3: string;
	value4: string;
	value5: string;
	value6: Bytes;
	value7: i32;

	constructor(
		value0: string,
		value1: Address,
		value2: string,
		value3: string,
		value4: string,
		value5: string,
		value6: Bytes,
		value7: i32
	) {
		this.value0 = value0;
		this.value1 = value1;
		this.value2 = value2;
		this.value3 = value3;
		this.value4 = value4;
		this.value5 = value5;
		this.value6 = value6;
		this.value7 = value7;
	}

	toMap(): TypedMap<string, EthereumValue> {
		let map = new TypedMap<string, EthereumValue>();
		map.set("value0", EthereumValue.fromString(this.value0));
		map.set("value1", EthereumValue.fromAddress(this.value1));
		map.set("value2", EthereumValue.fromString(this.value2));
		map.set("value3", EthereumValue.fromString(this.value3));
		map.set("value4", EthereumValue.fromString(this.value4));
		map.set("value5", EthereumValue.fromString(this.value5));
		map.set("value6", EthereumValue.fromFixedBytes(this.value6));
		map.set("value7", EthereumValue.fromI32(this.value7));
		return map;
	}
}

export class TAOFactory__validateTAOSignatureResult {
	value0: boolean;
	value1: string;
	value2: BigInt;

	constructor(value0: boolean, value1: string, value2: BigInt) {
		this.value0 = value0;
		this.value1 = value1;
		this.value2 = value2;
	}

	toMap(): TypedMap<string, EthereumValue> {
		let map = new TypedMap<string, EthereumValue>();
		map.set("value0", EthereumValue.fromBoolean(this.value0));
		map.set("value1", EthereumValue.fromString(this.value1));
		map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
		return map;
	}
}

export class TAOFactory extends SmartContract {
	static bind(address: Address): TAOFactory {
		return new TAOFactory("TAOFactory", address);
	}

	aoSettingAddress(): Address {
		let result = super.call("aoSettingAddress", []);
		return result[0].toAddress();
	}

	taoPoolAddress(): Address {
		let result = super.call("taoPoolAddress", []);
		return result[0].toAddress();
	}

	logosAddress(): Address {
		let result = super.call("logosAddress", []);
		return result[0].toAddress();
	}

	nameTAOPositionAddress(): Address {
		let result = super.call("nameTAOPositionAddress", []);
		return result[0].toAddress();
	}

	whitelist(param0: Address): boolean {
		let result = super.call("whitelist", [EthereumValue.fromAddress(param0)]);
		return result[0].toBoolean();
	}

	nameAccountRecoveryAddress(): Address {
		let result = super.call("nameAccountRecoveryAddress", []);
		return result[0].toAddress();
	}

	theAO(): Address {
		let result = super.call("theAO", []);
		return result[0].toAddress();
	}

	taoAncestryAddress(): Address {
		let result = super.call("taoAncestryAddress", []);
		return result[0].toAddress();
	}

	nameTAOVaultAddress(): Address {
		let result = super.call("nameTAOVaultAddress", []);
		return result[0].toAddress();
	}

	nameFactoryAddress(): Address {
		let result = super.call("nameFactoryAddress", []);
		return result[0].toAddress();
	}

	nameTAOLookupAddress(): Address {
		let result = super.call("nameTAOLookupAddress", []);
		return result[0].toAddress();
	}

	settingTAOId(): Address {
		let result = super.call("settingTAOId", []);
		return result[0].toAddress();
	}

	nonces(_taoId: Address): BigInt {
		let result = super.call("nonces", [EthereumValue.fromAddress(_taoId)]);
		return result[0].toBigInt();
	}

	incrementNonce(_taoId: Address): BigInt {
		let result = super.call("incrementNonce", [EthereumValue.fromAddress(_taoId)]);
		return result[0].toBigInt();
	}

	getTAO(_taoId: Address): TAOFactory__getTAOResult {
		let result = super.call("getTAO", [EthereumValue.fromAddress(_taoId)]);
		return new TAOFactory__getTAOResult(
			result[0].toString(),
			result[1].toAddress(),
			result[2].toString(),
			result[3].toString(),
			result[4].toString(),
			result[5].toString(),
			result[6].toBytes(),
			result[7].toI32()
		);
	}

	getTotalTAOsCount(): BigInt {
		let result = super.call("getTotalTAOsCount", []);
		return result[0].toBigInt();
	}

	getTAOIds(_from: BigInt, _to: BigInt): Array<Address> {
		let result = super.call("getTAOIds", [EthereumValue.fromUnsignedBigInt(_from), EthereumValue.fromUnsignedBigInt(_to)]);
		return result[0].toAddressArray();
	}

	validateTAOSignature(
		_data: string,
		_nonce: BigInt,
		_validateAddress: Address,
		_name: string,
		_signatureV: i32,
		_signatureR: Bytes,
		_signatureS: Bytes
	): TAOFactory__validateTAOSignatureResult {
		let result = super.call("validateTAOSignature", [
			EthereumValue.fromString(_data),
			EthereumValue.fromUnsignedBigInt(_nonce),
			EthereumValue.fromAddress(_validateAddress),
			EthereumValue.fromString(_name),
			EthereumValue.fromI32(_signatureV),
			EthereumValue.fromFixedBytes(_signatureR),
			EthereumValue.fromFixedBytes(_signatureS)
		]);
		return new TAOFactory__validateTAOSignatureResult(result[0].toBoolean(), result[1].toString(), result[2].toBigInt());
	}
}

export class SetNameAccountRecoveryAddressCall extends EthereumCall {
	get inputs(): SetNameAccountRecoveryAddressCall__Inputs {
		return new SetNameAccountRecoveryAddressCall__Inputs(this);
	}

	get outputs(): SetNameAccountRecoveryAddressCall__Outputs {
		return new SetNameAccountRecoveryAddressCall__Outputs(this);
	}
}

export class SetNameAccountRecoveryAddressCall__Inputs {
	_call: SetNameAccountRecoveryAddressCall;

	constructor(call: SetNameAccountRecoveryAddressCall) {
		this._call = call;
	}

	get _nameAccountRecoveryAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetNameAccountRecoveryAddressCall__Outputs {
	_call: SetNameAccountRecoveryAddressCall;

	constructor(call: SetNameAccountRecoveryAddressCall) {
		this._call = call;
	}
}

export class SetWhitelistCall extends EthereumCall {
	get inputs(): SetWhitelistCall__Inputs {
		return new SetWhitelistCall__Inputs(this);
	}

	get outputs(): SetWhitelistCall__Outputs {
		return new SetWhitelistCall__Outputs(this);
	}
}

export class SetWhitelistCall__Inputs {
	_call: SetWhitelistCall;

	constructor(call: SetWhitelistCall) {
		this._call = call;
	}

	get _account(): Address {
		return this._call.inputValues[0].value.toAddress();
	}

	get _whitelist(): boolean {
		return this._call.inputValues[1].value.toBoolean();
	}
}

export class SetWhitelistCall__Outputs {
	_call: SetWhitelistCall;

	constructor(call: SetWhitelistCall) {
		this._call = call;
	}
}

export class SetNameTAOPositionAddressCall extends EthereumCall {
	get inputs(): SetNameTAOPositionAddressCall__Inputs {
		return new SetNameTAOPositionAddressCall__Inputs(this);
	}

	get outputs(): SetNameTAOPositionAddressCall__Outputs {
		return new SetNameTAOPositionAddressCall__Outputs(this);
	}
}

export class SetNameTAOPositionAddressCall__Inputs {
	_call: SetNameTAOPositionAddressCall;

	constructor(call: SetNameTAOPositionAddressCall) {
		this._call = call;
	}

	get _nameTAOPositionAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetNameTAOPositionAddressCall__Outputs {
	_call: SetNameTAOPositionAddressCall;

	constructor(call: SetNameTAOPositionAddressCall) {
		this._call = call;
	}
}

export class SetNameFactoryAddressCall extends EthereumCall {
	get inputs(): SetNameFactoryAddressCall__Inputs {
		return new SetNameFactoryAddressCall__Inputs(this);
	}

	get outputs(): SetNameFactoryAddressCall__Outputs {
		return new SetNameFactoryAddressCall__Outputs(this);
	}
}

export class SetNameFactoryAddressCall__Inputs {
	_call: SetNameFactoryAddressCall;

	constructor(call: SetNameFactoryAddressCall) {
		this._call = call;
	}

	get _nameFactoryAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetNameFactoryAddressCall__Outputs {
	_call: SetNameFactoryAddressCall;

	constructor(call: SetNameFactoryAddressCall) {
		this._call = call;
	}
}

export class TransferOwnershipCall extends EthereumCall {
	get inputs(): TransferOwnershipCall__Inputs {
		return new TransferOwnershipCall__Inputs(this);
	}

	get outputs(): TransferOwnershipCall__Outputs {
		return new TransferOwnershipCall__Outputs(this);
	}
}

export class TransferOwnershipCall__Inputs {
	_call: TransferOwnershipCall;

	constructor(call: TransferOwnershipCall) {
		this._call = call;
	}

	get _theAO(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class TransferOwnershipCall__Outputs {
	_call: TransferOwnershipCall;

	constructor(call: TransferOwnershipCall) {
		this._call = call;
	}
}

export class ConstructorCall extends EthereumCall {
	get inputs(): ConstructorCall__Inputs {
		return new ConstructorCall__Inputs(this);
	}

	get outputs(): ConstructorCall__Outputs {
		return new ConstructorCall__Outputs(this);
	}
}

export class ConstructorCall__Inputs {
	_call: ConstructorCall;

	constructor(call: ConstructorCall) {
		this._call = call;
	}

	get _nameFactoryAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class ConstructorCall__Outputs {
	_call: ConstructorCall;

	constructor(call: ConstructorCall) {
		this._call = call;
	}
}

export class SetNameTAOLookupAddressCall extends EthereumCall {
	get inputs(): SetNameTAOLookupAddressCall__Inputs {
		return new SetNameTAOLookupAddressCall__Inputs(this);
	}

	get outputs(): SetNameTAOLookupAddressCall__Outputs {
		return new SetNameTAOLookupAddressCall__Outputs(this);
	}
}

export class SetNameTAOLookupAddressCall__Inputs {
	_call: SetNameTAOLookupAddressCall;

	constructor(call: SetNameTAOLookupAddressCall) {
		this._call = call;
	}

	get _nameTAOLookupAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetNameTAOLookupAddressCall__Outputs {
	_call: SetNameTAOLookupAddressCall;

	constructor(call: SetNameTAOLookupAddressCall) {
		this._call = call;
	}
}

export class SetAOSettingAddressCall extends EthereumCall {
	get inputs(): SetAOSettingAddressCall__Inputs {
		return new SetAOSettingAddressCall__Inputs(this);
	}

	get outputs(): SetAOSettingAddressCall__Outputs {
		return new SetAOSettingAddressCall__Outputs(this);
	}
}

export class SetAOSettingAddressCall__Inputs {
	_call: SetAOSettingAddressCall;

	constructor(call: SetAOSettingAddressCall) {
		this._call = call;
	}

	get _aoSettingAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetAOSettingAddressCall__Outputs {
	_call: SetAOSettingAddressCall;

	constructor(call: SetAOSettingAddressCall) {
		this._call = call;
	}
}

export class SetLogosAddressCall extends EthereumCall {
	get inputs(): SetLogosAddressCall__Inputs {
		return new SetLogosAddressCall__Inputs(this);
	}

	get outputs(): SetLogosAddressCall__Outputs {
		return new SetLogosAddressCall__Outputs(this);
	}
}

export class SetLogosAddressCall__Inputs {
	_call: SetLogosAddressCall;

	constructor(call: SetLogosAddressCall) {
		this._call = call;
	}

	get _logosAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetLogosAddressCall__Outputs {
	_call: SetLogosAddressCall;

	constructor(call: SetLogosAddressCall) {
		this._call = call;
	}
}

export class SetNameTAOVaultAddressCall extends EthereumCall {
	get inputs(): SetNameTAOVaultAddressCall__Inputs {
		return new SetNameTAOVaultAddressCall__Inputs(this);
	}

	get outputs(): SetNameTAOVaultAddressCall__Outputs {
		return new SetNameTAOVaultAddressCall__Outputs(this);
	}
}

export class SetNameTAOVaultAddressCall__Inputs {
	_call: SetNameTAOVaultAddressCall;

	constructor(call: SetNameTAOVaultAddressCall) {
		this._call = call;
	}

	get _nameTAOVaultAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetNameTAOVaultAddressCall__Outputs {
	_call: SetNameTAOVaultAddressCall;

	constructor(call: SetNameTAOVaultAddressCall) {
		this._call = call;
	}
}

export class SetTAOAncestryAddressCall extends EthereumCall {
	get inputs(): SetTAOAncestryAddressCall__Inputs {
		return new SetTAOAncestryAddressCall__Inputs(this);
	}

	get outputs(): SetTAOAncestryAddressCall__Outputs {
		return new SetTAOAncestryAddressCall__Outputs(this);
	}
}

export class SetTAOAncestryAddressCall__Inputs {
	_call: SetTAOAncestryAddressCall;

	constructor(call: SetTAOAncestryAddressCall) {
		this._call = call;
	}

	get _taoAncestryAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetTAOAncestryAddressCall__Outputs {
	_call: SetTAOAncestryAddressCall;

	constructor(call: SetTAOAncestryAddressCall) {
		this._call = call;
	}
}

export class SetSettingTAOIdCall extends EthereumCall {
	get inputs(): SetSettingTAOIdCall__Inputs {
		return new SetSettingTAOIdCall__Inputs(this);
	}

	get outputs(): SetSettingTAOIdCall__Outputs {
		return new SetSettingTAOIdCall__Outputs(this);
	}
}

export class SetSettingTAOIdCall__Inputs {
	_call: SetSettingTAOIdCall;

	constructor(call: SetSettingTAOIdCall) {
		this._call = call;
	}

	get _settingTAOId(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetSettingTAOIdCall__Outputs {
	_call: SetSettingTAOIdCall;

	constructor(call: SetSettingTAOIdCall) {
		this._call = call;
	}
}

export class SetTAOPoolAddressCall extends EthereumCall {
	get inputs(): SetTAOPoolAddressCall__Inputs {
		return new SetTAOPoolAddressCall__Inputs(this);
	}

	get outputs(): SetTAOPoolAddressCall__Outputs {
		return new SetTAOPoolAddressCall__Outputs(this);
	}
}

export class SetTAOPoolAddressCall__Inputs {
	_call: SetTAOPoolAddressCall;

	constructor(call: SetTAOPoolAddressCall) {
		this._call = call;
	}

	get _taoPoolAddress(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class SetTAOPoolAddressCall__Outputs {
	_call: SetTAOPoolAddressCall;

	constructor(call: SetTAOPoolAddressCall) {
		this._call = call;
	}
}

export class IncrementNonceCall extends EthereumCall {
	get inputs(): IncrementNonceCall__Inputs {
		return new IncrementNonceCall__Inputs(this);
	}

	get outputs(): IncrementNonceCall__Outputs {
		return new IncrementNonceCall__Outputs(this);
	}
}

export class IncrementNonceCall__Inputs {
	_call: IncrementNonceCall;

	constructor(call: IncrementNonceCall) {
		this._call = call;
	}

	get _taoId(): Address {
		return this._call.inputValues[0].value.toAddress();
	}
}

export class IncrementNonceCall__Outputs {
	_call: IncrementNonceCall;

	constructor(call: IncrementNonceCall) {
		this._call = call;
	}

	get value0(): BigInt {
		return this._call.outputValues[0].value.toBigInt();
	}
}

export class CreateTAOCall extends EthereumCall {
	get inputs(): CreateTAOCall__Inputs {
		return new CreateTAOCall__Inputs(this);
	}

	get outputs(): CreateTAOCall__Outputs {
		return new CreateTAOCall__Outputs(this);
	}
}

export class CreateTAOCall__Inputs {
	_call: CreateTAOCall;

	constructor(call: CreateTAOCall) {
		this._call = call;
	}

	get _name(): string {
		return this._call.inputValues[0].value.toString();
	}

	get _datHash(): string {
		return this._call.inputValues[1].value.toString();
	}

	get _database(): string {
		return this._call.inputValues[2].value.toString();
	}

	get _keyValue(): string {
		return this._call.inputValues[3].value.toString();
	}

	get _contentId(): Bytes {
		return this._call.inputValues[4].value.toBytes();
	}

	get _parentId(): Address {
		return this._call.inputValues[5].value.toAddress();
	}

	get _childMinLogos(): BigInt {
		return this._call.inputValues[6].value.toBigInt();
	}

	get _ethosCapStatus(): boolean {
		return this._call.inputValues[7].value.toBoolean();
	}

	get _ethosCapAmount(): BigInt {
		return this._call.inputValues[8].value.toBigInt();
	}
}

export class CreateTAOCall__Outputs {
	_call: CreateTAOCall;

	constructor(call: CreateTAOCall) {
		this._call = call;
	}
}
