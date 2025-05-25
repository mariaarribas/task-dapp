import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3';

import contractData from '../../assets/TaskManager.json';

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private web3!: Web3;
  private contract!: Contract<any>;
  private contractAddress = '0xb3d69c62eea5a82ace2f03a678138d7a4b1575da'; // Reemplaza esto

  constructor() {
    this.initWeb3();
  }

  private async initWeb3() {
    if ((window as any).ethereum) {
      try {
        await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
        this.web3 = new Web3((window as any).ethereum);

        this.contract = new this.web3.eth.Contract(
          contractData.abi,
          this.contractAddress
        );

        console.log('✅ Web3 y contrato inicializados correctamente');
      } catch (error) {
        console.error('❌ Error al conectar con Metamask:', error);
      }
    } else {
      console.error('❌ MetaMask no está instalado');
    }
  }

  public getContract(): Contract<any> {
    return this.contract;
  }

  public getWeb3(): Web3 {
    return this.web3;
  }
}

