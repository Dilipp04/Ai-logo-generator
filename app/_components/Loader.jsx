import React from 'react'

const Loader = () => {
    return (
        <div>
            <div class="flex justify-center items-center h-screen space-x-2">
                <div class="w-4 h-4 bg-primary rounded-full animate-bounce"></div>
                <div class="w-4 h-4 bg-primary rounded-full animate-bounce delay-200"></div>
                <div class="w-4 h-4 bg-primary rounded-full animate-bounce delay-400"></div>
            </div>

        </div>
    )
}

export default Loader