import { h } from 'preact';
import style from './style';
import Hero from '../../components/hero/';

const Home = () => (
	<div class="home io-2019-extended">
		<Hero title=" Google I/O Extended 2019는 Google I/O에서 발표된 Google의 최신 기술 및 인사이트에 대해 알아볼 수 있는 커뮤니티 이벤트입니다." meta=" 2019.06.30 · 세종대학교 광개토관 컨벤션홀"/>
		<figure class={style.figurePhoto} style="background-image:url(https://lh3.googleusercontent.com/ZctYwZFFq8xr_mYG4OAmrGwJTroYioZEh0wPfu8UdYx2epU52xlK1Bzt3XtR28Fg2sOn4O4yc1hJWQFfRbuZzmhJYL0pHspZ5LFsUeN37tTzYcVB6bkyz6q3g_pkcMWZ0LeWtYLJJTMujtxCancAu92cjaK9RyYhVnW0xwp9tzUVjiFFvcg60H_A0yXrXW0DsRxDfRHq68WZK0FLc-yK_BflfCP-PxUu3jHnTLmJwj3Ke5cHZy-G4OQSPWnbgBig2gwhvz3KWiZ3U2_9AFNcDylJoF98DqRn438G3GKiN4DQaN0-h7_V3W-VUGgWKNAcNNRFZeRhzQ7sV3B39XX_jTrLe2f8hjwsrP8hlHhOfAQG1RT0aZ7K8IL08larlKOzDJivEe6QaTgWKKpnK3YgGLpLaAXrOXRmEyCCvibYbIwW3TbX_yYRid4pSCp9_Lauc5cQMdpAC-3DdSw_m5iEBdR2LE_rGy2bMS5E4-KefY9b4QE7Vp4Kf66enTui-snM5rBw9OZqsY6xDlnU5QltcgvEOCnzLQDozLrlGH9shMxDRzFLGhMzgyh0gHj2Za6lAq9aHeLiypEKJr0Wg2aiM2cBiW1lg7F7RYM6drlzrRKsyWS4y-HmhfsygKTbYBSPvWlcoMdG4Z8QY2mDofS4T_3d2oDauZwUIyYkCUrFDsGjwKWNIvBM665wXoW8jY2rWMAhQD9NNnGPusiktEZLShx5ig=w2188-h1458-no)"></figure>
		<section class="io-ext-section">
			<h1 class="h1">Partners</h1>
			<h2 class="h2">Host</h2>
			<h2 class="h2">General Parter</h2>
		</section>
	</div>
);

export default Home;
