import WhatsAppClient from "./whatsapp";

const enabledGroups = process.env.GROUPS_ID?.split(",") || [];

if (enabledGroups.length === 0) {
	console.error("No groups enabled. Please set the GROUPS_ID environment variable.");
	process.exit(1);
}

async function main() {
	console.log(process.env.GROUPS_ID);
	const client = await WhatsAppClient.connect();
	client.onMessage(async (message) => {
		if (!enabledGroups.includes(message.from)) return;

		if (message.from) console.log("Message received:", message);
	});

    
}

main();
