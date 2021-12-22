import React from 'react'

function ErrorBanner({message}) {
    const errorMessage = message || "에러입니다"

    return (
        <div 
            data-testid="error-banner"
            style={{
                backgroundColor:'red',
                color: 'white'
            }}
        >
            {errorMessage}
        </div>
    )
}

export default ErrorBanner