"use client";

import { useState } from "react";

export default function FavColor() {
    const [warna, setWarna] = useState("Biru");

    const buttons = [
        { color: "Merah", class: "btn btn-error" },
        { color: "Kuning", class: "btn btn-warning" },
        { color: "Biru", class: "btn btn-primary" },
        { color: "Hijau", class: "btn btn-success" },
        { color: "Ungu", class: "btn btn-secondary" }
    ];

    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl mb-4">Warna Favorit saya adalah {warna}</h2>
                <div className="divider">Ubah state warna ke warna:</div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={btn.class}
                            onClick={() => setWarna(btn.color)}
                        >
                            {btn.color}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}