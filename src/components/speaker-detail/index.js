import { h, render, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';
import Modal from '../modal';
import { SPEAKER_LIST } from '../../datas/speakers';
import SocialLink from '../socialLink';

class SpeakerDetail extends Component {
    constructor(props) {
        super(props);

        const id = parseInt(this.props.id);
        const speaker = SPEAKER_LIST.find(speaker => speaker.id === id);

        this.state = {
            speaker: speaker
        }
    }

    render() {
        const speaker = this.state.speaker;

        return (
            <Modal from="/speakers">
                <div class="speaker-detail">
                    <div class={style.image}></div>
                    <div class={style.content}>
                        <div class={style.profile}>
                            <div class={style.thumb}>
                                <img src={speaker.photo} alt="" class={style.thumbImg} />
                            </div>
                            <div class={style.info}>
                                <div class={style.title}>{speaker.name}</div>
                                <div class={style.meta}>{speaker.company}</div>
                                <div class={style.outlink}>
                                    {speaker.socialLink.map(socialLink => (
                                        <SocialLink socialLink={socialLink} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div class={style.description}>
                            <p>{speaker.fullDesc}</p>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default SpeakerDetail;