import { AssetType } from "./commons";

export interface MatchEvent {
    leftAsset: AssetType,
    leftMaker: string,
    newLeftFill: number,
    newRightFill: number,
    number: string,
    rightHash: string,
    rightMaker: string,
    rightAsset: AssetType,
}