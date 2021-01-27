import React, { Component } from 'react';
import Hasil from './Hasil'

class Score extends Component {
    constructor(props) {
        super(props)
        this.state = {
            soalBelumDijawab: this.props.dataSoal.length,
            soalSudahDijawab: this.props.dataKoreksi.length,
            jawabanSalah: 0,
            jawabanBenar: 0,
            score: 0,
            hasilVisibility: true,
            buttonVisibility: false
        }
    }
    // Memperhitungkan Semua Data
    data = () => {
        let dataSoal = this.props.dataSoal;

        let dataJawaban = this.props.dataKoreksi;

        let belumDijawab = dataSoal.length - dataJawaban.length;

        let sudahDijawab = dataJawaban.length;

        let salah = dataJawaban.filter((value) => {
            return value.jawabKoreksi === "Salah"
        });

        let benar = dataJawaban.filter((value) => {
            return value.jawabKoreksi === "Benar"
        });

        let totalScore = 100 / dataSoal.length * benar.length;

        this.setState({
            soalBelumDijawab: belumDijawab,
            soalSudahDijawab: sudahDijawab,
            jawabanSalah: salah.length,
            jawabanBenar: benar.length,
            score: totalScore.toFixed(1),
            hasilVisibility: false,
            buttonVisibility: true
        })

    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2 mx-auto mb-3">
                        <button hidden={this.state.buttonVisibility} className="btn btn-primary" onClick={this.data}>Prosess Quiz</button>
                    </div>
                </div>
                <div hidden={this.state.hasilVisibility}>
                    <table className="table table-success table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center text-uppercase" scope="col">Belum Dijawab</th>
                                <th className="text-center text-uppercase" scope="col">Sudah Dijawab</th>
                                <th className="text-center text-uppercase" scope="col">Jawaban Salah</th>
                                <th className="text-center text-uppercase" scope="col">Jawaban Benar</th>
                                <th className="text-center text-uppercase" scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center fs-1 fw-bold">{this.state.soalBelumDijawab}</td>
                                <td className="text-center fs-1 fw-bold">{this.state.soalSudahDijawab}</td>
                                <td className="text-center fs-1 fw-bold">{this.state.jawabanSalah}</td>
                                <td className="text-center fs-1 fw-bold">{this.state.jawabanBenar}</td>
                                <td className="text-center fs-1 fw-bold">{this.state.score}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Hasil jawabBenarSalah={this.props.dataKoreksi} />
                </div>
            </div>
        );
    }
}

export default Score;