import WhatsAppClient from "./whatsapp";

async function main() {
	const client = await WhatsAppClient.connect();
	client.onMessage(async (message) => {
		console.log("Message received:", message);
	});
}

main();
