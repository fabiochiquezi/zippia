import styled from 'styled-components'

export const Li = styled.li`
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        span {
            color: #ccc;
            font-size: 14px;
            line-height: 14px;
        }
    }

    h3 {
        font-size: 18px;
        line-height: 18px;
        color: rgb(51, 51, 51);
        font-weight: 600;
    }

    h4 {
        font-size: 13px;
        color: rgb(51, 51, 51);
        font-size: 600;
    }

    p {
        margin-top: 14px;
        color: rgb(51, 51, 51);
        line-height: 1.4rem;
    }
`
