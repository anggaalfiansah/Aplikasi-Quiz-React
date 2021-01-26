/* eslint-disable array-callback-return */
import React, { Component } from 'react';

class Hasil extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.jawabBenarSalah.map((jawab, key) => {
                    if (jawab.jawabKoreksi === "Benar") {
                        return <li key={key} className="list-group-item bg-success text-white">Jawaban soal {jawab.nomor} {jawab.jawabKoreksi}</li>
                    } else if (jawab.jawabKoreksi === "Salah") {
                        return <li key={key} className="list-group-item bg-danger text-white">Jawaban soal {jawab.nomor} {jawab.jawabKoreksi}</li>
                    }
                })}
            </ul>

        );
    }
}

export default Hasil;