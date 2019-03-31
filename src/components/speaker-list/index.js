import { h, render, Component } from 'preact';
import { SPEAKER_LIST } from '../../datas/speakers';
import { Link } from 'preact-router/match';
import style from './style';

class SpeakerList extends Component {
    render() {
        return (
            <div class={style.list}>
                {SPEAKER_LIST.map((speaker) => (
                    <div class={style.card}>
                        <Link class={style.body} href={'/speakers/' + speaker.id}>
                            <div class={style.thumb}>
                                <img class={style.thumbImg} src={speaker.photo} alt="" />
                            </div>
                            <div class={style.title}>
                                {speaker.name}
                            </div>
                            <div class={style.company}>
                                {speaker.company}
                            </div>
                            <div class="speaker-desc">
                                <p>
                                    {speaker.shortDesc}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}

export default SpeakerList;