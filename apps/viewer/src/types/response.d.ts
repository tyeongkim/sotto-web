type DiaryResponse = {
	status: number;
	message: string;
	data: {
		uuid: string;
		data: string;
		nonce: string;
		updatedAt: string;
		owner: {
			uuid: string;
			name: string;
			username: string;
			profileUrl: string;
		};
	};
	responseAt: string;
};
