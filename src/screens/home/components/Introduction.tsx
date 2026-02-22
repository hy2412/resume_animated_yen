import {Col, Image, Row} from 'antd';
import {self_photo} from '../../../assets';
import {Spacer, Typo} from '../../../components';
import colors from '../../../constants/colors';
import styles from '../styles';
//import ContactBlock from './ContactBlock';
import Contacts from './Contacts';
import {TypeAnimation} from 'react-type-animation';
const Introduction = () => {
    const txtIntroductionFirst = `Hi, I'm Hoang Yen.`
    const txtIntroductionSecond = `Senior QA / QC Engineer.`
    const txtContent = `With over 7 years of experience in product-based environments, I specialize in end-to-end system validation across frontend, backend, APIs, and databases. 
    I have worked in Energy Trading, HealthTech, and ERP domains, supporting business-critical platforms with high accuracy and reliability requirements.`
    const txtContent1 = `My expertise includes API testing, SQL and MongoDB data verification, integration testing, performance testing, and production issue handling via Sentry monitoring. 
    I focus on risk-based testing strategies, root cause analysis, and cross-functional collaboration to ensure stable releases and prevent recurring incidents.`
    const txtContact = `If you are looking for a QA professional who combines technical depth with business understanding and production ownership, feel free to connect. 
    I’m always open to discussing how quality-driven thinking can strengthen your product and engineering processes.`
    const highLightTxtContent = [
        ""
    ]
    const highLightTxtContact = [
        "",
    ]
    return <Row align="middle" justify='space-between'>
        <Col span={14} style={styles.boxInformation}>
            <TypeAnimation
                sequence={[
                    txtIntroductionFirst,
                    1500,
                    txtIntroductionSecond,
                    1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{fontSize: 24, display: 'inline-block', fontFamily: 'RobotoRegular', fontWeight: 'bold'}}
            />
            <Spacer h={16} />
            {txtContent.split(' ').map(it => {
                if (highLightTxtContent.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={5} />
                        {txtContent1.split(' ').map(it => {
                if (highLightTxtContent.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={12} />
            {txtContact.split(' ').map(it => {
                if (highLightTxtContact.includes(it)) {
                    return <Typo bold txt={`${it} `} style={{...styles.txtMap, color: colors.highLight}} />
                }
                return <Typo txt={`${it} `} style={styles.txtMap} />
            })}
            <Spacer h={30} />
        <Contacts />
        </Col>
        <Col span={9}>
            <Image
                src={self_photo}
                style={{borderRadius: 12, border: '4px solid rgb(255, 244, 228)'}}
                preview={false}
            />
        </Col>
    </Row>
}
export default Introduction
