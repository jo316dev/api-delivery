<?php

namespace App\Http\Controllers\Admin;

use App\Charts\ReportsChart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReportsController extends Controller
{
    public function months(ReportsChart $chart)
    {
        $chart->labels(['JAN', 'FEV', 'MAR']);
        $chart->dataset('2021', 'bars', [
            12, 14, 16
        ]);
        return view('admin.charts.chart', compact('chart'));
    }
}
