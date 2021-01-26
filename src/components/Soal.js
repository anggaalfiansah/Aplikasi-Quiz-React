import React, { Component } from 'react';
import { SoalData } from "./SoalData";
import Radio from "./jawaban/radio";
import CheckBox from './jawaban/checkBox';
import Essay from './jawaban/essay';
import Hasil from './Hasil';

class Soal extends Component {
    constructor(props) {
        super(props);
        this.state = { jawabanSoal: [], koreksiJawaban: [], jawabanSoalKoreksi: []}
    }

    addJawaban = (jawaban) => {
        let semuaJawaban = this.state.jawabanSoal

        semuaJawaban.push(jawaban);

        semuaJawaban.sort((a, b) => a.nomor - b.nomor);

        this.setState({ jawabanSoal: semuaJawaban });
        console.log(this.state.jawabanSoal)
    }

    addKoreksi = (jawaban) => {
        let koreksiJawaban = this.state.koreksiJawaban

        koreksiJawaban.push(jawaban);

        koreksiJawaban.sort((a, b) => a.nomor - b.nomor);

        this.setState({ koreksiJawaban: koreksiJawaban });
        console.log(this.state.koreksiJawaban)

    }

    tempatJawaban = (data, key) => {
        // Jika Tipe Soal Berbentuk essay
        if (data.type === 'essay') {
            return (
                <Essay jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban} funcKoreksi={this.addKoreksi} />
            )
        }

        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'checkbox') {
            return (
                <CheckBox data={data} jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban} funcKoreksi={this.addKoreksi} />
            )
        }

        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'radio') {
            return (
                <Radio soal={data.soal} a={data.a} b={data.b} c={data.c} d={data.d} jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban} funcKoreksi={this.addKoreksi} />
            )
        }
    }

    render() {
        return (
            <div>
                {SoalData.map((data, key) => {
                    return (
                        <div className="pt-2" id={key} key={key}>
                            <span>{key + 1}. </span><label className="form-label">{data.soal}</label>
                            <div>
                                {this.tempatJawaban(data, key)}
                            </div>
                            <hr />
                        </div>
                    )
                })}


                <Hasil jawaban={this.state.jawabanSoal} jawabBenarSalah={this.state.koreksiJawaban} />

            </div>
        );
    }
}

export default Soal;