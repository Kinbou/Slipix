import React from 'react';
import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

import getCroppedImg from '@/utils/cropImage';

import './upload.scss';

const avatarSize = {
	width: 300,
	height: 300,
};

const Crop = ({
	img,
	imgType,
	onCancel,
	onCrop,
}: any): React.ReactElement => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

	const sendImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(img, croppedAreaPixels, avatarSize, imgType);
			onCrop(croppedImage);
		} catch (err) {
			console.error(err);
		}
	}, [croppedAreaPixels]);

	const onCropComplete = useCallback((_: any, cropAreaPixels: any) => {
		setCroppedAreaPixels(cropAreaPixels);
	}, []);

	const onZoomChange = (value: any) => {
		setZoom(value);
	};

	return (
		<div className="crop">
			<div className="crop__container">
				<Cropper
					image={img}
					crop={crop}
					zoom={zoom}
					aspect={1}
					cropShape="round"
					showGrid={false}
					onCropChange={setCrop}
					onCropComplete={onCropComplete}
					onZoomChange={onZoomChange}
				/>
			</div>
			<div className="crop__controls">
				<input type="range" min={1} max={3} step={0.1} value={zoom} onChange={(e) => setZoom(+e.target.value)} />
				<div className="crop__controls__buttons">
					{/* @ts-ignore */}
					<button onClick={onCancel} alt="" type="button" className="crop__controls__buttons__button crop__controls__buttons__button--cancel">Annuler</button>
					{/* @ts-ignore */}
					<button onClick={sendImage} alt="" type="button" className="crop__controls__buttons__button crop__controls__buttons__button--validate">Valider</button>
				</div>
			</div>
		</div>
	);
};

export default Crop;
