import React from "react";
import styled from "styled-components";

const LogoSection = styled.a`
  position: fixed;
  margin: 10px 0 0 25px;
`;

function Header() {
  return (
    <div>
      <LogoSection>
        <a href="/">
          <svg
            width="132"
            height="64"
            viewBox="0 0 126 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.6484 24.3438C51.3047 24.3438 56.2656 25.6094 59.5312 28.1406C62.7969 30.6562 64.4297 34.4453 64.4297 39.5078C64.4297 42.4297 63.9688 44.8828 63.0469 46.8672C62.1406 48.8359 60.8438 50.4297 59.1562 51.6484C57.4844 52.8516 55.4609 53.7109 53.0859 54.2266C50.7266 54.7422 48.0859 55 45.1641 55H31.5234V50.8281H32.6719C33.1562 50.8281 33.5391 50.7656 33.8203 50.6406C34.1016 50.5 34.3125 50.3203 34.4531 50.1016C34.5938 49.8672 34.6797 49.5938 34.7109 49.2812C34.7578 48.9688 34.7812 48.625 34.7812 48.25C34.7812 48.2031 34.7812 47.9219 34.7812 47.4062C34.7812 46.875 34.7734 46.1953 34.7578 45.3672C34.7578 44.5391 34.7578 43.6016 34.7578 42.5547C34.7578 41.5078 34.7578 40.4453 34.7578 39.3672V30.7422C34.7578 30.4141 34.7266 30.1172 34.6641 29.8516C34.6172 29.5859 34.5156 29.3516 34.3594 29.1484C34.2188 28.9453 34.0078 28.7891 33.7266 28.6797C33.4609 28.5547 33.1094 28.4922 32.6719 28.4922H31.5234V24.3438H44.6484ZM42.4453 50.4531H45.8203C47.5391 50.4531 49.0391 50.2422 50.3203 49.8203C51.6172 49.3984 52.6875 48.7422 53.5312 47.8516C54.3906 46.9453 55.0312 45.7969 55.4531 44.4062C55.8906 43.0156 56.1094 41.3516 56.1094 39.4141C56.1094 35.7578 55.2578 33.0938 53.5547 31.4219C51.8672 29.7344 49.2812 28.8906 45.7969 28.8906H42.4453V50.4531Z"
              fill="#F07B3F"
            />
            <path
              d="M75.9412 34.8438C75.9412 34.8438 76.0298 35.0781 76.2069 35.5469C76.384 36.0156 76.6183 36.6354 76.91 37.4062C77.2017 38.1771 77.535 39.0573 77.91 40.0469C78.2954 41.026 78.6808 42.0365 79.0662 43.0781C79.4621 44.1094 79.8475 45.1198 80.2225 46.1094C80.6079 47.099 80.9517 47.9896 81.2537 48.7812C81.5558 49.5625 81.8006 50.2031 81.9881 50.7031C82.1756 51.1927 82.2746 51.4531 82.285 51.4844C82.4725 51.974 82.6235 52.3542 82.7381 52.625C82.8631 52.8854 83.0142 53.0781 83.1912 53.2031C83.3683 53.3281 83.6079 53.4062 83.91 53.4375C84.2225 53.4583 84.66 53.4688 85.2225 53.4688V55C84.6392 55 84.061 54.9948 83.4881 54.9844C82.9152 54.974 82.3215 54.9688 81.7069 54.9688C81.3735 54.9688 81.0506 54.9688 80.7381 54.9688C80.4256 54.9688 80.1027 54.9688 79.7694 54.9688C79.436 54.9688 79.0819 54.974 78.7069 54.9844C78.3319 54.9844 77.91 54.9896 77.4412 55C77.4412 54.9167 77.436 54.7917 77.4256 54.625C77.4256 54.4479 77.4256 54.276 77.4256 54.1094V53.5C77.9048 53.5 78.2954 53.5 78.5975 53.5C78.8996 53.4896 79.1392 53.474 79.3162 53.4531C79.4933 53.4219 79.6131 53.3802 79.6756 53.3281C79.7485 53.2656 79.785 53.1823 79.785 53.0781C79.7642 53.026 79.7485 52.9583 79.7381 52.875C79.7277 52.7917 79.7069 52.6927 79.6756 52.5781L78.0194 47.6094H69.8475C69.8371 47.6302 69.7902 47.7656 69.7069 48.0156C69.6235 48.2552 69.5194 48.5573 69.3944 48.9219C69.2694 49.276 69.134 49.6615 68.9881 50.0781C68.8423 50.4948 68.7017 50.8854 68.5662 51.25C68.4412 51.6042 68.3371 51.9062 68.2537 52.1562C68.1704 52.3958 68.1287 52.5208 68.1287 52.5312C68.0246 52.7917 67.9725 52.9792 67.9725 53.0938C67.9725 53.2917 68.0767 53.4115 68.285 53.4531C68.5037 53.4948 68.8631 53.5156 69.3631 53.5156H70.4881V55C69.9048 55 69.3215 54.9948 68.7381 54.9844C68.1652 54.974 67.5819 54.9688 66.9881 54.9688C66.6756 54.9688 66.3735 54.9688 66.0819 54.9688C65.8006 54.9688 65.509 54.9688 65.2069 54.9688C64.9048 54.9688 64.5819 54.974 64.2381 54.9844C63.9048 54.9844 63.5298 54.9896 63.1131 55V53.4531C63.634 53.4427 64.0402 53.4323 64.3319 53.4219C64.634 53.4115 64.8683 53.3698 65.035 53.2969C65.2017 53.224 65.3267 53.1146 65.41 52.9688C65.5037 52.8229 65.6027 52.6094 65.7069 52.3281C65.7173 52.2969 65.7798 52.1302 65.8944 51.8281C66.0194 51.5156 66.1756 51.1094 66.3631 50.6094C66.561 50.1094 66.785 49.5312 67.035 48.875C67.285 48.2083 67.5506 47.5052 67.8319 46.7656C68.1235 46.026 68.4152 45.2708 68.7069 44.5C69.009 43.7188 69.3006 42.9583 69.5819 42.2188C69.8631 41.4792 70.1287 40.7812 70.3787 40.125C70.6392 39.4583 70.8631 38.875 71.0506 38.375C71.2485 37.875 71.4048 37.474 71.5194 37.1719C71.634 36.8594 71.6965 36.6875 71.7069 36.6562L72.3319 34.8438H75.9412ZM70.4412 46.0312H77.4412L73.9412 36.3125L70.4412 46.0312ZM101.351 40.6562H99.5069C99.4131 39.9583 99.21 39.3385 98.8975 38.7969C98.585 38.2448 98.1683 37.7812 97.6475 37.4062C97.1371 37.0312 96.5277 36.7448 95.8194 36.5469C95.1215 36.349 94.3402 36.25 93.4756 36.25C92.2777 36.25 91.1996 36.4531 90.2412 36.8594C89.2933 37.2552 88.486 37.8281 87.8194 38.5781C87.1527 39.3177 86.6423 40.2188 86.2881 41.2812C85.934 42.3438 85.7569 43.5417 85.7569 44.875C85.7569 46.2292 85.934 47.4427 86.2881 48.5156C86.6527 49.5885 87.1735 50.5 87.8506 51.25C88.5277 51.9896 89.3506 52.5573 90.3194 52.9531C91.2985 53.349 92.4079 53.5469 93.6475 53.5469C95.585 53.5469 97.0485 53.2656 98.0381 52.7031C99.0277 52.1302 99.5225 51.2552 99.5225 50.0781V48.0156C99.5225 47.8073 99.5069 47.651 99.4756 47.5469C99.4444 47.4323 99.361 47.349 99.2256 47.2969C99.1006 47.2448 98.9027 47.2188 98.6319 47.2188C98.361 47.2083 97.9912 47.2031 97.5225 47.2031H95.5694V45.5625C95.9131 45.5625 96.2517 45.5677 96.585 45.5781C96.9287 45.5781 97.2933 45.5781 97.6787 45.5781C98.0746 45.5781 98.4965 45.5833 98.9444 45.5938C99.4027 45.5938 99.9131 45.5938 100.476 45.5938C100.674 45.5938 100.913 45.5938 101.194 45.5938C101.476 45.5833 101.762 45.5781 102.054 45.5781C102.356 45.5781 102.647 45.5781 102.929 45.5781C103.22 45.5677 103.476 45.5625 103.694 45.5625C103.694 45.5833 103.689 45.6771 103.679 45.8438C103.668 46 103.658 46.1771 103.647 46.375C103.647 46.5625 103.642 46.7396 103.632 46.9062C103.621 47.0625 103.616 47.151 103.616 47.1719C103.147 47.1823 102.783 47.2031 102.522 47.2344C102.262 47.2552 102.069 47.2969 101.944 47.3594C101.819 47.4219 101.741 47.5052 101.71 47.6094C101.689 47.7031 101.679 47.8333 101.679 48C101.679 48.5625 101.647 49.2448 101.585 50.0469C101.533 50.8385 101.481 51.6562 101.429 52.5C100.856 53.0833 100.246 53.5625 99.6006 53.9375C98.9652 54.3125 98.3142 54.6094 97.6475 54.8281C96.9912 55.0365 96.3298 55.1771 95.6631 55.25C94.9965 55.3333 94.3506 55.375 93.7256 55.375C91.9131 55.375 90.3194 55.1302 88.9444 54.6406C87.5694 54.1406 86.4131 53.4375 85.4756 52.5312C84.5485 51.6146 83.8506 50.5156 83.3819 49.2344C82.9131 47.9427 82.6787 46.5052 82.6787 44.9219C82.6787 43.3802 82.934 41.9688 83.4444 40.6875C83.9548 39.3958 84.6631 38.2917 85.5694 37.375C86.4756 36.4479 87.5537 35.7292 88.8037 35.2188C90.0537 34.7083 91.4183 34.4531 92.8975 34.4531C94.1371 34.4531 95.2985 34.6354 96.3819 35C97.4756 35.3542 98.4287 35.9219 99.2412 36.7031L99.3975 35.0938H101.351V40.6562ZM102.698 34.8438C103.041 34.8438 103.406 34.849 103.791 34.8594C104.177 34.8594 104.573 34.8594 104.979 34.8594C105.385 34.8594 105.791 34.8646 106.198 34.875C106.604 34.875 106.994 34.875 107.369 34.875C107.411 34.875 107.573 34.875 107.854 34.875C108.135 34.8646 108.458 34.8594 108.823 34.8594C109.187 34.8594 109.552 34.8594 109.916 34.8594C110.291 34.849 110.593 34.8438 110.823 34.8438V36.3906H110.073C109.593 36.3906 109.224 36.4115 108.963 36.4531C108.713 36.4844 108.526 36.5469 108.401 36.6406C108.286 36.724 108.218 36.8385 108.198 36.9844C108.177 37.1302 108.166 37.3125 108.166 37.5312V43.6719H118.619V37.4062C118.619 37.1562 118.588 36.9635 118.526 36.8281C118.474 36.6823 118.369 36.5781 118.213 36.5156C118.067 36.4531 117.869 36.4167 117.619 36.4062C117.38 36.3958 117.073 36.3906 116.698 36.3906H115.948V34.8438C116.708 34.8646 117.458 34.875 118.198 34.875C118.937 34.875 119.64 34.875 120.307 34.875C120.349 34.875 120.52 34.875 120.823 34.875C121.125 34.8646 121.474 34.8594 121.869 34.8594C122.276 34.8594 122.682 34.8594 123.088 34.8594C123.505 34.849 123.838 34.8438 124.088 34.8438V36.3906H123.354C122.885 36.3906 122.52 36.4115 122.26 36.4531C122.01 36.4844 121.823 36.5417 121.698 36.625C121.583 36.7083 121.515 36.8125 121.494 36.9375C121.474 37.0625 121.463 37.2188 121.463 37.4062V52.1406C121.463 52.224 121.458 52.3073 121.448 52.3906C121.448 52.4635 121.448 52.5365 121.448 52.6094C121.448 52.7552 121.463 52.8802 121.494 52.9844C121.536 53.0885 121.619 53.1771 121.744 53.25C121.88 53.3229 122.073 53.375 122.323 53.4062C122.573 53.4375 122.916 53.4531 123.354 53.4531H124.088V55C123.744 55 123.406 55 123.073 55C122.739 54.9896 122.395 54.9844 122.041 54.9844C121.698 54.9844 121.333 54.9844 120.948 54.9844C120.562 54.974 120.135 54.9688 119.666 54.9688C119.27 54.9688 118.906 54.974 118.573 54.9844C118.239 54.9844 117.921 54.9844 117.619 54.9844C117.328 54.9844 117.046 54.9896 116.776 55C116.505 55 116.229 55 115.948 55V53.4531H116.698C117.166 53.4531 117.531 53.4271 117.791 53.375C118.052 53.3125 118.244 53.2292 118.369 53.125C118.494 53.0104 118.567 52.8802 118.588 52.7344C118.609 52.5781 118.619 52.401 118.619 52.2031V45.3438H108.166V52.2969C108.166 52.599 108.192 52.8281 108.244 52.9844C108.296 53.1406 108.39 53.2552 108.526 53.3281C108.671 53.401 108.869 53.4427 109.119 53.4531C109.369 53.4531 109.687 53.4531 110.073 53.4531H110.823V55C110.531 55 110.25 55 109.979 55C109.708 54.9896 109.427 54.9844 109.135 54.9844C108.854 54.9844 108.546 54.9844 108.213 54.9844C107.88 54.974 107.51 54.9688 107.104 54.9688C106.635 54.9688 106.203 54.974 105.807 54.9844C105.421 54.9844 105.057 54.9844 104.713 54.9844C104.369 54.9844 104.031 54.9896 103.698 55C103.375 55 103.041 55 102.698 55V53.4531H103.432C103.901 53.4531 104.265 53.4219 104.526 53.3594C104.786 53.2969 104.974 53.2135 105.088 53.1094C105.203 52.9948 105.27 52.8646 105.291 52.7188C105.312 52.5729 105.323 52.4115 105.323 52.2344V37.3594C105.323 37.1823 105.312 37.0312 105.291 36.9062C105.27 36.7812 105.198 36.6823 105.073 36.6094C104.958 36.526 104.77 36.4688 104.51 36.4375C104.26 36.4062 103.901 36.3906 103.432 36.3906H102.698V34.8438Z"
              fill="#3D84A8"
            />
            <path
              d="M23.3516 47.6562C16.6953 47.6562 11.7344 46.3906 8.46875 43.8594C5.20312 41.3438 3.57031 37.5547 3.57031 32.4922C3.57031 29.5703 4.03125 27.1172 4.95312 25.1328C5.85938 23.1641 7.15625 21.5703 8.84375 20.3516C10.5156 19.1484 12.5391 18.2891 14.9141 17.7734C17.2734 17.2578 19.9141 17 22.8359 17H36.4766V21.1719H35.3281C34.8438 21.1719 34.4609 21.2344 34.1797 21.3594C33.8984 21.5 33.6875 21.6797 33.5469 21.8984C33.4062 22.1328 33.3203 22.4062 33.2891 22.7188C33.2422 23.0312 33.2188 23.375 33.2188 23.75C33.2188 23.7969 33.2188 24.0781 33.2188 24.5938C33.2188 25.125 33.2266 25.8047 33.2422 26.6328C33.2422 27.4609 33.2422 28.3984 33.2422 29.4453C33.2422 30.4922 33.2422 31.5547 33.2422 32.6328V41.2578C33.2422 41.5859 33.2734 41.8828 33.3359 42.1484C33.3828 42.4141 33.4844 42.6484 33.6406 42.8516C33.7812 43.0547 33.9922 43.2109 34.2734 43.3203C34.5391 43.4453 34.8906 43.5078 35.3281 43.5078H36.4766V47.6562H23.3516ZM25.5547 21.5469H22.1797C20.4609 21.5469 18.9609 21.7578 17.6797 22.1797C16.3828 22.6016 15.3125 23.2578 14.4687 24.1484C13.6094 25.0547 12.9687 26.2031 12.5469 27.5938C12.1094 28.9844 11.8906 30.6484 11.8906 32.5859C11.8906 36.2422 12.7422 38.9062 14.4453 40.5781C16.1328 42.2656 18.7188 43.1094 22.2031 43.1094H25.5547V21.5469Z"
              fill="#F07B3F"
            />
          </svg>
        </a>
      </LogoSection>
    </div>
  );
}

export default Header;