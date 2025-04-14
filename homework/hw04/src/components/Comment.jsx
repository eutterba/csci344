import React, { useState, useEffect } from "react";

export default function Comment({ commentData }) {
    console.log(commentData);
    return (
        <p className="flex gap-2 text-sm mb-3">
                    <strong>
                        {commentData.user.username}
                    </strong>
                    {commentData.text}
        </p>
    )

}