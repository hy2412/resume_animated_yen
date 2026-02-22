import {FacebookFilled, GithubFilled, LinkedinFilled} from '@ant-design/icons';
import {Button, Row} from "antd";
import {useState} from "react";
import {Spacer} from '../../../components';
import colors from "../../../constants/colors";
import {onLink} from '../../../utils';
import styles from '../styles';
import {LINK_IN_WEB} from './constants';
interface ColorIconProps {
    icon: string
    bg: string
}
const ContactBlock = () => {
    const initColor = {icon: colors.black, bg: colors.white}
    const [colorLinked, setColorLinked] = useState<ColorIconProps>(initColor)
    // const [colorGitHub, setColorGitHub] = useState<ColorIconProps>(initColor)
    const [colorFacebook, setColorFacebook] = useState<ColorIconProps>(initColor)

    // const onMouseOverGitHub = () => {
    //     setColorGitHub({icon: colors.white, bg: colors.black})
    // }
    const onMouseOverLinked = () => {
        setColorLinked({icon: colors.white, bg: colors.linked})
    }
    // const onMouseOverFacebook = () => {
    //  setColorFacebook({icon: colors.white, bg: colors.facebook})
    // }
    const onMouseLeave = () => {
        setColorLinked(initColor)
        // setColorGitHub(initColor)
        // setColorFacebook(initColor)
    }

    const renderIconLinked = <LinkedinFilled style={{...styles.icon, color: colorLinked.icon}} />
    // const renderIconGitHub = <GithubFilled style={{...styles.icon, color: colorGitHub.icon}} />
    // const renderIconFacebook = <FacebookFilled style={{...styles.icon, color: colorFacebook.icon}} />
    return <Row align={'middle'}>
        <Button onClick={() => onLink(LINK_IN_WEB.mailTo)} style={styles.btn}>Contact me</Button>
        <Spacer w={10} />
        <Button
            style={{...styles.btnNone, backgroundColor: colorLinked.bg}}
            icon={renderIconLinked}
            onClick={() => onLink(LINK_IN_WEB.linked)}
            onMouseOver={onMouseOverLinked}
            onMouseLeave={onMouseLeave}
        />
        <Spacer w={10} />
        {/* <Button
            onMouseOver={onMouseOverGitHub}
            onMouseLeave={onMouseLeave}
            onClick={() => onLink(LINK_IN_WEB.github)}
            style={{...styles.btnNone, backgroundColor: colorGitHub.bg}}
            icon={renderIconGitHub}
        /> */}
        <Spacer w={10} />
        <Button
            onMouseOver={onMouseOverFacebook}
            onMouseLeave={onMouseLeave}
            onClick={() => onLink(LINK_IN_WEB.fb)}
            style={{...styles.btnNone, backgroundColor: colorFacebook.bg}}
            icon={renderIconFacebook}
        />
    </Row>
}
export default ContactBlock
