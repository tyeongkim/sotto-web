import { base64ToUint8Array } from './common';

async function importAesKeyFromBase64(base64Key: string) {
	const rawKey = base64ToUint8Array(base64Key);
	return crypto.subtle.importKey('raw', rawKey, 'AES-GCM', true, ['decrypt']);
}

export async function decrypt(
	base64Key: string,
	base64Nonce: string,
	base64Data: string,
) {
	const key = await importAesKeyFromBase64(base64Key);
	const iv = base64ToUint8Array(base64Nonce);
	const data = base64ToUint8Array(base64Data);

	const decrypted = await crypto.subtle.decrypt(
		{
			name: 'AES-GCM',
			iv: iv,
		},
		key,
		data,
	);

	const result = new TextDecoder().decode(decrypted);
	return JSON.parse(result);
}
