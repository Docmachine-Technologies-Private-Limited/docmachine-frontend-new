import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { AppConfig } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {
  socket: Socket;
  constructor() { }

  connectionOn() {
    // this.socket = io(AppConfig.SOCKET_ENDPONT)
  }
}
