<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PHPMailerService;

class ContactController extends Controller
{
    public function send(Request $request, PHPMailerService $mailer)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', 'regex:/^[a-zA-ZÀ-ÿ\s]+$/'], 
            'email' => ['required', 'email', 'regex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/', 'max:255'],
            'phone' => ['required', 'regex:/^\+?[0-9]{7,15}$/'],
            'message' => 'required|string|min:10|max:5000',
        ]);

        $to = env('MAIL_TO_ADDRESS', 'lcravenna@unionferroviaria.org.ar');
        $subject = 'Nueva consulta';
        $body = view('emails.contact', ['data' => $request->all()])->render();

        try {
            $result = $mailer->sendMail($to, $subject, $body);

            if ($result['status'] === 'success') {
                return response()->json(['message' => $result['message']]);
            } else {
                return response()->json(['error' => $result['message']], 500);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Error en el servidor: ' . $e->getMessage()], 500);
        }
    }
}

/* namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        Mail::to('leonardocravenna@gmail.com')->send(new ContactMail($request->all()));

        return response()->json(['message' => 'Consulta enviada con éxito']);
    }
} */