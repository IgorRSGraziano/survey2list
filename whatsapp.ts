import { Client, LocalAuth } from "whatsapp-web.js";
import QRCode from "qrcode-terminal";

// const client = new Client({});

export default class WhatsAppClient {
	private constructor(private readonly client: Client) {}

	public async connect() {
		const client = new Client({
			authStrategy: new LocalAuth({}),
		});

		return new Promise((resolve, reject) => {
			client.on("qr", (qr) => {
				QRCode.generate(qr, { small: true });
			});
			client.on("ready", () => {
				resolve(new WhatsAppClient(client));
			});

			client.on("auth_failure", (msg) => {
				reject(new Error("Authentication failure: " + msg));
			});
		});
	}
}
