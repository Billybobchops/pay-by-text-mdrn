import 'remoteDesignSystem/DesignSystemRootStyles';
import Checkbox from 'remoteDesignSystem/Checkbox';
import Divider from 'remoteDesignSystem/Divider';
import Label from 'remoteDesignSystem/Label';
import Paragraph from 'remoteDesignSystem/Paragraph';
import PrimaryButton from 'remoteDesignSystem/PrimaryButton';

const PayByText = () => {
    return (
        <>
            <Divider isDark={false} />
            {/* <label key={} className={classes.checkboxOption} htmlFor={item.id}>
                <Checkbox checked={item.checked} id={item.id} onChange={() => handleChange(i)} />
                {item.text}
            </label> */}
            <Label inputID="asd;lj" label="Sign up for Pay By Text" required={false} />
            {/* <Checkbox /> */}
            <Paragraph>
                Message and data rates may apply. You may opt out of text delivery at any yime by replying STOP to any
                Text message received from Invoice Cloud. Text HELP for more information. Message frequency varies.
                Contact customer support at (314-123-1234). T-Mobile is not liable for delayed or underlivered messages.
            </Paragraph>
            <PrimaryButton disabled={false} text="Save my changes" variant="green" />
        </>
    );
};

export default PayByText;
