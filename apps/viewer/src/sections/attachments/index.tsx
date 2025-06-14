import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../lib/app';
import { decrypt } from '../../lib/crypto';
import { biggerImage, biggerOverlay, item, section } from './styles.css';

export function Attachments() {
	const { diary } = useContext(AppContext);
	if (!diary || diary.attachments.length <= 0) {
		return null;
	}

	return (
		<section className={section}>
			{diary.attachments.map((a, i) => (
				<Item key={i.toString()} url={a.remote_url} />
			))}
		</section>
	);
}

interface ItemProps {
	url: string;
}

function Item(props: ItemProps) {
	const { url } = props;

	const { key } = useContext(AppContext);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [showOverlay, setShowOverlay] = useState(false);

	const getAttachment = useCallback(async () => {
		if (!key) {
			console.error('Key is missing for decryption');
			return;
		}

		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Failed to fetch attachment: ${res.statusText}`);
		}

		const payload: AttachmentResponse = await res.json();
		const { data, nonce } = payload;

		const decrypted = await decrypt(key, nonce, data);
		setPreviewUrl(decrypted);
	}, [key, url]);

	const onClickItem = useCallback(() => {
		if (previewUrl) {
			setShowOverlay((prev) => !prev);
		}
	}, [previewUrl]);

	const onClickOverlay = useCallback(() => {
		setShowOverlay(false);
	}, []);

	useEffect(() => {
		getAttachment();
	}, [getAttachment]);

	return (
		<>
			<div
				className={item}
				style={{ backgroundImage: `url(${previewUrl})` }}
				onClick={onClickItem}
			/>
			{showOverlay && previewUrl ? (
				<div className={biggerOverlay} onClick={onClickOverlay}>
					<img
						className={biggerImage}
						src={previewUrl}
						alt='Attachment preview'
					/>
				</div>
			) : null}
		</>
	);
}
