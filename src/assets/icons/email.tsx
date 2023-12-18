import { Ref, forwardRef, memo } from 'react'

import { IconProps, IconWrapper } from '@/assets/IconWrapper'

const Email = (allProps: IconProps, ref: Ref<SVGSVGElement>) => {
  const { svgProps: props, ...restProps } = allProps

  return (
    <IconWrapper
      icon={
        <svg
          fill={'currentColor'}
          height={''}
          ref={ref}
          viewBox={'0 0 96 96'}
          width={''}
          xmlns={'http://www.w3.org/2000/svg'}
        >
          <path
            d={
              'M95.5 48C95.5 74.2335 74.2335 95.5 48 95.5C21.7665 95.5 0.5 74.2335 0.5 48C0.5 21.7665 21.7665 0.5 48 0.5C74.2335 0.5 95.5 21.7665 95.5 48Z'
            }
            fill={'#8C61FF'}
            fillOpacity={'0.05'}
            stroke={'#BEA6FF'}
          />
          <path
            d={
              'M77.8886 54.4543C77.7188 54.4521 77.5566 54.3836 77.4365 54.2635C77.3164 54.1435 77.2479 53.9812 77.2457 53.8114V44.5714C77.2457 44.4009 77.3135 44.2374 77.434 44.1169C77.5546 43.9963 77.7181 43.9286 77.8886 43.9286C78.0591 43.9286 78.2226 43.9963 78.3432 44.1169C78.4637 44.2374 78.5314 44.4009 78.5314 44.5714V53.82C78.5292 53.989 78.4605 54.1503 78.3402 54.269C78.2199 54.3877 78.0576 54.4543 77.8886 54.4543Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M77.8886 41.7772C77.7181 41.7772 77.5546 41.7094 77.434 41.5889C77.3135 41.4683 77.2457 41.3048 77.2457 41.1343V39.24C77.2457 39.0695 77.3135 38.906 77.434 38.7855C77.5546 38.6649 77.7181 38.5972 77.8886 38.5972C78.0591 38.5972 78.2226 38.6649 78.3432 38.7855C78.4637 38.906 78.5314 39.0695 78.5314 39.24V41.1429C78.5314 41.2269 78.5148 41.3101 78.4824 41.3876C78.45 41.4651 78.4024 41.5354 78.3426 41.5944C78.2828 41.6535 78.2119 41.7 78.1339 41.7314C78.056 41.7627 77.9726 41.7783 77.8886 41.7772Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M25.7863 32.5028H22.2274C21.859 32.5028 21.5601 32.2038 21.5601 31.8355C21.5601 31.4671 21.859 31.1682 22.2274 31.1682H25.7863C26.1547 31.1682 26.4536 31.4671 26.4536 31.8355C26.4536 32.2038 26.1547 32.5028 25.7863 32.5028Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M24.0073 34.2824C23.6389 34.2824 23.34 33.9834 23.34 33.6151V30.0561C23.34 29.6878 23.6389 29.3888 24.0073 29.3888C24.3756 29.3888 24.6746 29.6878 24.6746 30.0561V33.6151C24.6746 33.9834 24.3756 34.2824 24.0073 34.2824Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M36.8572 73.7143C37.3304 73.7143 37.7144 74.0983 37.7144 74.5714C37.7144 75.0446 37.3304 75.4286 36.8572 75.4286C36.3841 75.4286 36.0001 75.0446 36.0001 74.5714C36.0001 74.0983 36.3841 73.7143 36.8572 73.7143Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M31.7143 73.7143C32.1874 73.7143 32.5714 74.0983 32.5714 74.5714C32.5714 75.0446 32.1874 75.4286 31.7143 75.4286C31.2411 75.4286 30.8571 75.0446 30.8571 74.5714C30.8571 74.0983 31.2411 73.7143 31.7143 73.7143Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M26.5714 73.7143C27.0446 73.7143 27.4286 74.0983 27.4286 74.5714C27.4286 75.0446 27.0446 75.4286 26.5714 75.4286C26.0983 75.4286 25.7143 75.0446 25.7143 74.5714C25.7143 74.0983 26.0983 73.7143 26.5714 73.7143Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={'M47.8645 23.2418L23.7649 43.0406L47.8645 62.8486L71.9641 43.0406L47.8645 23.2418Z'}
            fill={'#333333'}
          />
          <path
            d={
              'M47.8647 63.5436C47.7069 63.5303 47.5591 63.4613 47.4475 63.349L23.3479 43.541C23.2692 43.4753 23.2059 43.3931 23.1626 43.3002C23.1193 43.2072 23.0972 43.1059 23.0977 43.0033C23.099 42.9011 23.122 42.8004 23.1651 42.7077C23.2083 42.615 23.2706 42.5326 23.3479 42.4657L47.4475 22.667C47.575 22.553 47.74 22.4899 47.911 22.4899C48.082 22.4899 48.247 22.553 48.3745 22.667L72.4741 42.4657C72.5514 42.5326 72.6137 42.615 72.6569 42.7077C72.7 42.8004 72.723 42.9011 72.7243 43.0033C72.7248 43.1059 72.7027 43.2072 72.6594 43.3002C72.6161 43.3931 72.5528 43.4753 72.4741 43.541L48.3745 63.349C48.308 63.4155 48.2282 63.4673 48.1404 63.5008C48.0525 63.5343 47.9585 63.5489 47.8647 63.5436ZM24.8588 43.0404L47.8647 61.9493L70.8705 43.0404L47.8647 24.1408L24.8588 43.0404Z'
            }
            fill={'#BEA6FF'}
          />
          <path d={'M65.0126 28.8032H30.717V69.5872H65.0126V28.8032Z'} fill={'#333333'} />
          <path
            d={'M55.4098 40.853L43.6937 50.4836V69.5872H65.0126V40.853H55.4098Z'}
            fill={'#333333'}
          />
          <path
            d={
              'M65.0588 70.2823H30.7632C30.5795 70.2799 30.4041 70.2059 30.2743 70.076C30.1444 69.9461 30.0704 69.7707 30.068 69.5871V28.8031C30.0728 28.622 30.1482 28.4499 30.2781 28.3235C30.4079 28.1971 30.582 28.1264 30.7632 28.1265H65.0588C65.2432 28.1265 65.42 28.1997 65.5504 28.3301C65.6807 28.4604 65.754 28.6373 65.754 28.8216V69.6056C65.7468 69.786 65.6708 69.9568 65.5414 70.0827C65.412 70.2086 65.2393 70.28 65.0588 70.2823ZM31.412 68.9104H64.3172V29.5168H31.412V68.9104Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M58.9875 35.0598H48.1705C47.9861 35.0598 47.8093 34.9865 47.679 34.8562C47.5486 34.7258 47.4753 34.549 47.4753 34.3646C47.4753 34.1802 47.5486 34.0034 47.679 33.873C47.8093 33.7427 47.9861 33.6694 48.1705 33.6694H58.9875C59.1719 33.6694 59.3487 33.7427 59.4791 33.873C59.6095 34.0034 59.6827 34.1802 59.6827 34.3646C59.6827 34.549 59.6095 34.7258 59.4791 34.8562C59.3487 34.9865 59.1719 35.0598 58.9875 35.0598Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M44.4628 35.0598H36.7417C36.5573 35.0598 36.3805 34.9865 36.2501 34.8562C36.1197 34.7258 36.0465 34.549 36.0465 34.3646C36.0465 34.1802 36.1197 34.0034 36.2501 33.873C36.3805 33.7427 36.5573 33.6694 36.7417 33.6694H44.4628C44.6472 33.6694 44.824 33.7427 44.9544 33.873C45.0848 34.0034 45.158 34.1802 45.158 34.3646C45.158 34.549 45.0848 34.7258 44.9544 34.8562C44.824 34.9865 44.6472 35.0598 44.4628 35.0598Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M58.9874 39.6944H51.878C51.6937 39.6944 51.5168 39.6211 51.3865 39.4907C51.2561 39.3604 51.1829 39.1836 51.1829 38.9992C51.1829 38.8148 51.2561 38.638 51.3865 38.5076C51.5168 38.3772 51.6937 38.304 51.878 38.304H58.9874C59.1718 38.304 59.3486 38.3772 59.479 38.5076C59.6094 38.638 59.6826 38.8148 59.6826 38.9992C59.6826 39.1836 59.6094 39.3604 59.479 39.4907C59.3486 39.6211 59.1718 39.6944 58.9874 39.6944Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M48.1705 39.6944H36.7417C36.5573 39.6944 36.3805 39.6211 36.2501 39.4907C36.1197 39.3604 36.0465 39.1836 36.0465 38.9992C36.0465 38.8148 36.1197 38.638 36.2501 38.5076C36.3805 38.3772 36.5573 38.304 36.7417 38.304H48.1705C48.3548 38.304 48.5317 38.3772 48.662 38.5076C48.7924 38.638 48.8657 38.8148 48.8657 38.9992C48.8657 39.1836 48.7924 39.3604 48.662 39.4907C48.5317 39.6211 48.3548 39.6944 48.1705 39.6944Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M58.9876 44.3289H46.3168C46.1324 44.3289 45.9556 44.2556 45.8252 44.1253C45.6948 43.9949 45.6216 43.8181 45.6216 43.6337C45.6216 43.4493 45.6948 43.2725 45.8252 43.1421C45.9556 43.0118 46.1324 42.9385 46.3168 42.9385H58.9876C59.172 42.9385 59.3488 43.0118 59.4792 43.1421C59.6095 43.2725 59.6828 43.4493 59.6828 43.6337C59.6828 43.8181 59.6095 43.9949 59.4792 44.1253C59.3488 44.2556 59.172 44.3289 58.9876 44.3289Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M42.609 44.3289H36.7417C36.5573 44.3289 36.3805 44.2556 36.2501 44.1253C36.1197 43.9949 36.0465 43.8181 36.0465 43.6337C36.0465 43.4493 36.1197 43.2725 36.2501 43.1421C36.3805 43.0118 36.5573 42.9385 36.7417 42.9385H42.609C42.7934 42.9385 42.9702 43.0118 43.1006 43.1421C43.231 43.2725 43.3042 43.4493 43.3042 43.6337C43.3042 43.8181 43.231 43.9949 43.1006 44.1253C42.9702 44.2556 42.7934 44.3289 42.609 44.3289Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M58.9875 48.9635H52.805C52.6207 48.9635 52.4438 48.8902 52.3135 48.7598C52.1831 48.6295 52.1099 48.4527 52.1099 48.2683C52.1099 48.0839 52.1831 47.9071 52.3135 47.7767C52.4438 47.6463 52.6207 47.5731 52.805 47.5731H58.9875C59.1719 47.5731 59.3487 47.6463 59.4791 47.7767C59.6095 47.9071 59.6827 48.0839 59.6827 48.2683C59.6827 48.4527 59.6095 48.6295 59.4791 48.7598C59.3487 48.8902 59.1719 48.9635 58.9875 48.9635Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M49.0974 48.9635H36.7417C36.5573 48.9635 36.3805 48.8902 36.2501 48.7598C36.1197 48.6295 36.0465 48.4527 36.0465 48.2683C36.0465 48.0839 36.1197 47.9071 36.2501 47.7767C36.3805 47.6463 36.5573 47.5731 36.7417 47.5731H49.0974C49.2818 47.5731 49.4586 47.6463 49.589 47.7767C49.7193 47.9071 49.7926 48.0839 49.7926 48.2683C49.7926 48.4527 49.7193 48.6295 49.589 48.7598C49.4586 48.8902 49.2818 48.9635 49.0974 48.9635Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M54.0472 53.598H41.6822C41.4979 53.598 41.321 53.5248 41.1907 53.3944C41.0603 53.264 40.9871 53.0872 40.9871 52.9028C40.9871 52.7185 41.0603 52.5416 41.1907 52.4113C41.321 52.2809 41.4979 52.2077 41.6822 52.2077H54.0472C54.2316 52.2077 54.4084 52.2809 54.5388 52.4113C54.6691 52.5416 54.7424 52.7185 54.7424 52.9028C54.7424 53.0872 54.6691 53.264 54.5388 53.3944C54.4084 53.5248 54.2316 53.598 54.0472 53.598Z'
            }
            fill={'#BEA6FF'}
          />
          <path d={'M23.7649 43.0405V69.5871L39.9116 56.3138L23.7649 43.0405Z'} fill={'#333333'} />
          <path d={'M55.8176 56.3138L71.9644 69.5871V43.0405L55.8176 56.3138Z'} fill={'#333333'} />
          <path
            d={
              'M47.8645 62.8485L39.9116 56.3138L23.7649 69.5872H71.9641L55.8174 56.3138L47.8645 62.8485Z'
            }
            fill={'#333333'}
          />
          <path d={'M28.3998 50.4927V65.7774L37.6967 58.1397L28.3998 50.4927Z'} fill={'#333333'} />
          <path d={'M63.1958 57.8803L71.9643 65.0916V50.6782L63.1958 57.8803Z'} fill={'#333333'} />
          <path
            d={
              'M23.7652 70.2823C23.662 70.2808 23.5604 70.2554 23.4686 70.2081C23.3499 70.1533 23.2493 70.0658 23.1787 69.9558C23.1081 69.8457 23.0704 69.7178 23.0701 69.5871V43.0404C23.0704 42.9097 23.1081 42.7818 23.1787 42.6718C23.2493 42.5617 23.3499 42.4742 23.4686 42.4194C23.5874 42.3614 23.7202 42.3384 23.8516 42.3532C23.9829 42.368 24.1073 42.4199 24.2102 42.5028L40.3569 55.7761C40.435 55.8423 40.4978 55.9246 40.5408 56.0175C40.5838 56.1103 40.6061 56.2114 40.6061 56.3138C40.6061 56.4161 40.5838 56.5172 40.5408 56.61C40.4978 56.7029 40.435 56.7852 40.3569 56.8514L24.2102 70.1154C24.0865 70.2223 23.9287 70.2814 23.7652 70.2823ZM24.4604 44.5142V68.1133L38.8182 56.3138L24.4604 44.5142Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M60.4244 60.0954L50.2747 68.4376L43.1931 62.6166L34.7212 69.587H71.9644L60.4244 60.0954Z'
            }
            fill={'#333333'}
          />
          <path
            d={
              'M71.9644 70.2823C71.801 70.2814 71.6432 70.2223 71.5195 70.1154L55.3728 56.8606C55.2947 56.7945 55.2319 56.7122 55.1889 56.6193C55.1458 56.5265 55.1235 56.4254 55.1235 56.323C55.1235 56.2207 55.1458 56.1196 55.1889 56.0267C55.2319 55.9339 55.2947 55.8515 55.3728 55.7854L71.5473 42.5028C71.6502 42.4199 71.7746 42.368 71.9059 42.3532C72.0373 42.3384 72.1701 42.3614 72.2888 42.4194C72.4075 42.4742 72.5081 42.5617 72.5788 42.6718C72.6494 42.7818 72.6871 42.9097 72.6874 43.0404V69.5871C72.6871 69.7178 72.6494 69.8457 72.5788 69.9558C72.5081 70.0658 72.4075 70.1533 72.2888 70.2081C72.1887 70.2598 72.0771 70.2853 71.9644 70.2823ZM56.9114 56.3138L71.2692 68.1133V44.5142L56.9114 56.3138Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M71.9642 70.2823H23.7649C23.621 70.2816 23.4808 70.2367 23.3632 70.1539C23.2455 70.071 23.1561 69.9541 23.1069 69.8189C23.0604 69.6841 23.0559 69.5384 23.0939 69.4011C23.132 69.2637 23.2108 69.1411 23.32 69.0495L39.4668 55.7762C39.5942 55.6622 39.7592 55.5992 39.9302 55.5992C40.1012 55.5992 40.2662 55.6622 40.3937 55.7762L47.9017 61.9494L55.4096 55.7762C55.5371 55.6622 55.7021 55.5992 55.8731 55.5992C56.0441 55.5992 56.2091 55.6622 56.3365 55.7762L72.4833 69.0495C72.5924 69.1411 72.6713 69.2637 72.7094 69.4011C72.7474 69.5384 72.7429 69.6841 72.6965 69.8189C72.6435 69.9667 72.5427 70.0926 72.41 70.1765C72.2774 70.2605 72.1204 70.2977 71.9642 70.2823ZM25.7022 68.9105H70.027L55.7896 57.2129L48.2817 63.3861C48.1542 63.5001 47.9892 63.5632 47.8182 63.5632C47.6472 63.5632 47.4822 63.5001 47.3548 63.3861L39.8468 57.2129L25.7022 68.9105Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M46.3576 75.3599H42.7987C42.4303 75.3599 42.1313 75.061 42.1313 74.6926C42.1313 74.3243 42.4303 74.0253 42.7987 74.0253H46.3576C46.7259 74.0253 47.0249 74.3243 47.0249 74.6926C47.0249 75.061 46.7259 75.3599 46.3576 75.3599Z'
            }
            fill={'#BEA6FF'}
          />
          <path
            d={
              'M44.5788 77.1395C44.2105 77.1395 43.9115 76.8406 43.9115 76.4722V72.9133C43.9115 72.5449 44.2105 72.246 44.5788 72.246C44.9472 72.246 45.2461 72.5449 45.2461 72.9133V76.4722C45.2461 76.8406 44.9472 77.1395 44.5788 77.1395Z'
            }
            fill={'#BEA6FF'}
          />
        </svg>
      }
      {...restProps}
    />
  )
}

const ForwardRef = forwardRef(Email)

export default memo(ForwardRef)
