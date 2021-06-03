export interface ItemTransfer {
  /**
   * Date string (Ex: 2019-08-24T14:15:22Z)
   */
  date: string;
  /**
   * Owner Address
   */
  owner: string;
  /**
   * From Address
   */
  from: string;
  /**
   * Contract Address
   */
  contract: string;
  tokenId: string;
  value: number;
}
