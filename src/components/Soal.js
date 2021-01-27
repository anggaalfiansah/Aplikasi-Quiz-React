import React, { Component } from 'react';
import { SoalData } from "./SoalData";
import Radio from "./jawaban/radio";
import CheckBox from './jawaban/checkBox';
import Essay from './jawaban/essay';
import Score from './Score';

class Soal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            jawabanSoal: []
        }
    }

    // // Menambah Data Ke State SemuaJawaban
    addJawaban = (jawaban) => {
        let semuaJawaban = this.state.jawabanSoal

        semuaJawaban.push(jawaban);

        // Menyortir data array sesuai nomor
        semuaJawaban.sort((a, b) => a.nomor - b.nomor);

        this.setState({ jawabanSoal: semuaJawaban });
    }

    // Fungsi Untuk menampilkan Radio, Checkbox, Essay untuk soal
    tempatJawaban = (data, key) => {
        // Jika Tipe Soal Berbentuk essay
        if (data.type === 'essay') {
            return (
                <Essay jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban}/>
            )
        }

        // Jika Tipe Soal Berbentuk checkbox
        else if (data.type === 'checkbox') {
            return (
                <CheckBox data={data} jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban}/>
            )
        }

        // Jika Tipe Soal Berbentuk radio (a,b,c,d)
        else if (data.type === 'radio') {
            return (
                <Radio soal={data.soal} a={data.a} b={data.b} c={data.c} d={data.d} jawab={data.jawab} nomor={key + 1} funcJawab={this.addJawaban}/>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="mx-auto py-5 px-5 py-3 border border-secondary bg-light shadow rounded">
                    {/* Menampilkan Soal */}
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
                </div>

                <div className="container my-5 py-5 px-5 py-3 border border-secondary bg-light shadow rounded">
                    <Score dataKoreksi={this.state.jawabanSoal} dataSoal ={SoalData} />
                </div>

            </div>
        );
    }
}

export default Soal;