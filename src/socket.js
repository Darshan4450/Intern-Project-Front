import { SocketIO } from 'nativescript-socketio'
import { baseURL } from './bootstrap'
const socket = new SocketIO(baseURL, {})
socket.connect()
export default socket