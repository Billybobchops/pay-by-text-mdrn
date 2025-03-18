import 'remoteDesignSystem/DesignSystemRootStyles';
import { useState } from 'react';
import AccountLinks from 'remoteDesignSystem/AccountLinks';
import Checkbox from 'remoteDesignSystem/Checkbox';
import Divider from 'remoteDesignSystem/Divider';
import Input from 'remoteDesignSystem/Input';
import Label from 'remoteDesignSystem/Label';
import Paragraph from 'remoteDesignSystem/Paragraph';
import PrimaryButton from 'remoteDesignSystem/PrimaryButton';

const PayByText = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const dummyAccountLinks = [
        {
            text: '#UTIL-1001 Deana Ada',
            href: '/',
        },
        {
            text: '#UTIL-1004 Nikephoros Botaneiates',
            href: '/',
        },
    ];

    return (
        <>
            <AccountLinks links={dummyAccountLinks} spacing="u-mt-s u-mb-xl" />
            <Divider isDark={false} />
            <Label inline={true} inputID="pointToCheckbox" required={false} spacing="u-mb-m">
                <Checkbox checked={isChecked} onChange={handleCheckboxChange} spacing="u-ml-none" />
                Sign up for Pay By Text
            </Label>

            {isChecked && (
                <>
                    <Input label="Enter a Phone Number" name="phoneNumber" required={true} type="number" />
                    <Paragraph>
                        Message and data rates may apply. You may opt out of text delivery at any yime by replying STOP
                        to any Text message received from Invoice Cloud. Text HELP for more information. Message
                        frequency varies. Contact customer support at (314-123-1234). T-Mobile is not liable for delayed
                        or underlivered messages.
                    </Paragraph>
                </>
            )}
            <PrimaryButton disabled={false} text="Save my changes" variant="green" />
        </>
    );
};

export default PayByText;
