import React from "react";
import { Box } from "@chakra-ui/react";

function SettingsSvg() {
  return (
    <Box
      as='svg'
      role='img'
      width='24px'
      height='24px'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M7.03051 1.5373C7.03051 0.684892 7.71538 0 8.5678 0H9.37458C10.227 0 10.9119 0.684891 10.9119 1.5373V1.59491C10.9119 1.83046 11.0505 2.02992 11.2615 2.10024L11.2743 2.10451C11.6001 2.22296 11.908 2.34583 12.2202 2.50194C12.4218 2.60272 12.6521 2.56617 12.8244 2.3939L12.882 2.33629C13.4807 1.73764 14.46 1.73764 15.0586 2.33629L15.6349 2.91256C16.2336 3.51121 16.2336 4.49049 15.6349 5.08914C15.6349 5.08915 15.6349 5.08914 15.6349 5.08914L15.5773 5.14677C15.4072 5.31684 15.3694 5.5435 15.4654 5.74321C15.5969 5.98233 15.7038 6.25454 15.7936 6.48294L15.7994 6.49793C15.8205 6.55152 15.8407 6.60299 15.8608 6.65329L15.8663 6.66693L15.871 6.68087C15.9413 6.89184 16.1407 7.03052 16.3763 7.03052H16.4627C17.3151 7.03052 18 7.71538 18 8.5678V9.37457C18 10.227 17.3151 10.9119 16.4627 10.9119H16.3763C16.1429 10.9119 15.9449 11.048 15.8729 11.2557C15.778 11.5703 15.6527 11.8822 15.4981 12.1914C15.3973 12.393 15.4338 12.6233 15.6061 12.7956L15.6637 12.8532C16.2624 13.4519 16.2624 14.4312 15.6637 15.0298L15.0875 15.6061C14.4888 16.2047 13.5096 16.2048 12.9109 15.6061C12.9109 15.6061 12.9109 15.6062 12.9109 15.6061L12.8736 15.5689L12.8656 15.5601C12.7359 15.4174 12.4914 15.3625 12.2778 15.4693C11.9656 15.6254 11.6576 15.7481 11.3319 15.8665L11.3192 15.8711C11.1082 15.9414 10.9695 16.1407 10.9695 16.3763V16.4627C10.9695 17.3151 10.2846 18 9.4322 18H8.62542C7.77302 18 7.08814 17.3151 7.08814 16.4627V16.4339C7.08814 16.1984 6.94947 15.9989 6.7385 15.9286L6.72568 15.9243L6.71269 15.9194C6.40466 15.8074 6.06494 15.6839 5.75097 15.5269C5.54938 15.4261 5.31903 15.4626 5.14677 15.6349L5.11802 15.6637C4.51937 16.2623 3.54001 16.2624 2.94136 15.6637L2.36509 15.0875C1.76644 14.4888 1.76644 13.5095 2.36509 12.9109L2.3735 12.9024L2.38231 12.8944C2.52496 12.7647 2.5799 12.5202 2.47313 12.3067C2.31614 11.9927 2.19262 11.653 2.08062 11.345L2.07126 11.3192C2.00093 11.1082 1.80164 10.9695 1.5661 10.9695H1.53729C0.684868 10.9695 0 10.2846 0 9.4322V8.62543C0 7.77301 0.684879 7.08815 1.53729 7.08815C1.76893 7.08815 1.96568 6.95401 2.03902 6.7489C2.13911 6.38885 2.29863 6.04233 2.44431 5.75097C2.5451 5.5494 2.50855 5.31905 2.33628 5.14678L2.30746 5.11796C2.30744 5.11794 2.30748 5.11798 2.30746 5.11796C1.70887 4.5193 1.70883 3.54 2.30746 2.94137L2.88373 2.36509C3.48237 1.76646 4.46163 1.76644 5.06029 2.36505C5.06027 2.36503 5.0603 2.36506 5.06029 2.36505L5.0891 2.39385C5.26137 2.56613 5.49177 2.60272 5.69334 2.50194L5.70162 2.4978L5.71005 2.49397C6.04062 2.34371 6.34099 2.22364 6.66811 2.10468L6.68081 2.10006C6.89177 2.02974 7.03051 1.83046 7.03051 1.59491V1.5373ZM8.5678 1C8.26767 1 8.03051 1.23716 8.03051 1.5373V1.59491C8.03051 2.2215 7.65328 2.82672 7.00416 3.04655C6.70221 3.15647 6.42989 3.26548 6.1314 3.40091C5.5284 3.69758 4.84139 3.56032 4.38209 3.10105C4.38207 3.10104 4.3821 3.10107 4.38209 3.10105L4.35327 3.07225C4.14514 2.86412 3.79897 2.86407 3.59084 3.0722L3.01457 3.64847C2.80644 3.8566 2.80644 4.20272 3.01457 4.41085L3.04338 4.43967C3.04336 4.43965 3.04341 4.43969 3.04338 4.43967C3.50496 4.9013 3.64133 5.593 3.33874 6.19818C3.19846 6.47873 3.07244 6.7601 2.99933 7.02817L2.99568 7.04156L2.99129 7.05473C2.77348 7.70816 2.16616 8.08815 1.53729 8.08815C1.23715 8.08815 1 8.3253 1 8.62543V9.4322C1 9.73234 1.23717 9.9695 1.53729 9.9695H1.5661C2.19272 9.9695 2.79794 10.3468 3.01775 10.9959C3.13416 11.316 3.2394 11.6031 3.36755 11.8594C3.66192 12.4482 3.54799 13.1767 3.06608 13.6242C2.86409 13.8329 2.86613 14.1743 3.0722 14.3804L3.64847 14.9566C3.8566 15.1648 4.20273 15.1648 4.41085 14.9566L4.43961 14.9279C4.90124 14.4662 5.59299 14.3299 6.19818 14.6325C6.45449 14.7606 6.74166 14.8659 7.06176 14.9823C7.71089 15.2021 8.08813 15.8073 8.08813 16.4339V16.4627C8.08813 16.7628 8.32529 17 8.62542 17H9.4322C9.73234 17 9.96949 16.7628 9.96949 16.4627V16.3763C9.96949 15.7497 10.3467 15.1445 10.9958 14.9246C11.3016 14.8133 11.5682 14.706 11.8306 14.5748C12.4199 14.2802 13.1492 14.3946 13.5966 14.8777L13.6179 14.899C13.826 15.1071 14.1722 15.1071 14.3803 14.899L14.9566 14.3227C15.1647 14.1146 15.1647 13.7685 14.9566 13.5603L14.899 13.5027C14.899 13.5027 14.899 13.5027 14.899 13.5027C14.4374 13.0411 14.301 12.3494 14.6036 11.7442C14.7358 11.4799 14.8401 11.2185 14.9177 10.9597L14.9199 10.9525L14.9223 10.9453C15.1401 10.2918 15.7474 9.91187 16.3763 9.91187H16.4627C16.7628 9.91187 17 9.67471 17 9.37457V8.5678C17 8.26767 16.7628 8.03052 16.4627 8.03052H16.3763C15.7523 8.03052 15.1495 7.6564 14.9274 7.01223C14.9077 6.96282 14.8881 6.91293 14.8689 6.86411C14.7708 6.61438 14.6839 6.39542 14.585 6.2174L14.5797 6.2079L14.5748 6.19818C14.2722 5.59298 14.4085 4.90131 14.8702 4.43968C14.8702 4.43968 14.8702 4.43968 14.8702 4.43968L14.9278 4.38205C15.1359 4.17392 15.1359 3.82779 14.9278 3.61967L14.3515 3.04339C14.1434 2.83527 13.7973 2.83527 13.5891 3.04339L13.5315 3.10101C13.5315 3.10102 13.5315 3.10099 13.5315 3.10101C13.0699 3.5626 12.3782 3.69896 11.773 3.39637C11.5106 3.26515 11.244 3.15786 10.9382 3.04654C10.2891 2.82671 9.91186 2.2215 9.91186 1.59491V1.5373C9.91186 1.23716 9.6747 1 9.37458 1H8.5678ZM4.79968 9.10693C4.79968 6.75972 6.70247 4.85693 9.04968 4.85693C11.3969 4.85693 13.2997 6.75972 13.2997 9.10693C13.2997 11.4541 11.3969 13.3569 9.04968 13.3569C6.70247 13.3569 4.79968 11.4541 4.79968 9.10693ZM9.04968 5.85693C7.25476 5.85693 5.79968 7.31201 5.79968 9.10693C5.79968 10.9019 7.25476 12.3569 9.04968 12.3569C10.8446 12.3569 12.2997 10.9019 12.2997 9.10693C12.2997 7.31201 10.8446 5.85693 9.04968 5.85693Z'
        fill='currentColor'
      />
    </Box>
  );
}

export default SettingsSvg;
