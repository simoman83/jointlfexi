<?php
// THESE MUST BE THE VERY FIRST LINES - BEFORE ANYTHING ELSE
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

session_start();

// Check both POST and GET data
$method = $_SERVER['REQUEST_METHOD'];
$data = ($method === 'POST') ? $_POST : $_GET;

// Debug: Log all request data
error_log("$method data: " . print_r($data, true));

if(isset($data['submit'])){
    $name = isset($data['name']) ? trim($data['name']) : '';
    $phone = isset($data['phone']) ? trim($data['phone']) : '';
    
    // Validate
    if(empty($name) || empty($phone)){
        die("Error: Name or phone is empty. Name: '$name', Phone: '$phone'. Method: $method");
    }
} else {
    die("Data not being submitted - submit field missing. Method: $method. Available data: " . print_r($data, true));
}

$offer_id = '13677'; // UPDATE THIS WITH YOUR CORRECT OFFER ID
$api_key = '75944ea60321ecc482d2c749c7570918';
$country_code = 'EG';
$base_url = 'https://google.com/';
$price = '949';
$referrer = 'google.com';
$ip = $_SERVER['REMOTE_ADDR'];
$subacc = isset($data['subacc']) ? $data['subacc'] : '';

// ADD YOUR THANK YOU PAGE URL HERE
$thank_you_url = 'https://your-domain.com/thank-you.html'; // UPDATE THIS URL

const API_URL = "https://api.adcombo.com/api/v2/order/create/";

$args = [
    'api_key' => $api_key,
    'name' => $name,
    'phone' => $phone,
    'offer_id' => $offer_id,
    'country_code' => $country_code,
    'price' => $price,
    'base_url' => $base_url,
    'ip' => $ip,
    'referrer' => $referrer,
    'subacc' => $subacc,
];

$url = API_URL.'?'.http_build_query($args);

error_log("API URL: " . $url);

$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true
));
$res = curl_exec($curl);
curl_close($curl);

$res = json_decode($res, true);

// Log the response for debugging
error_log("API Response: " . print_r($res, true));

if (isset($res['code']) && $res['code'] == 'ok') {
    // Success! Store data in session and redirect to thank you page
    $_SESSION['printname'] = $name;
    $_SESSION['printphone'] = $phone;
    $_SESSION['order_id'] = isset($res['order_id']) ? $res['order_id'] : '';
    $_SESSION['order_success'] = true;
    
    // Redirect to thank you page
    header("Location: $thank_you_url");
    exit();
} else {
    // Error occurred - show error details
    $errorMsg = isset($res['error']) ? $res['error'] : 'Unknown error occurred';
    
    echo "<div style='font-family: Arial; padding: 20px; max-width: 600px; margin: 0 auto;'>";
    echo "<h2 style='color: #d32f2f;'>❌ حدث خطأ في معالجة الطلب</h2>";
    echo "<p style='background: #ffebee; padding: 15px; border-radius: 5px; border-left: 4px solid #d32f2f;'>";
    echo "<strong>رسالة الخطأ:</strong> " . htmlspecialchars($errorMsg) . "<br>";
    echo "<strong>الاسم:</strong> " . htmlspecialchars($name) . "<br>";
    echo "<strong>الهاتف:</strong> " . htmlspecialchars($phone);
    echo "</p>";
    echo "<p><a href='javascript:history.back()' style='background: #1976d2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>← العودة للمحاولة مرة أخرى</a></p>";
    
    // Debug info (remove in production)
    echo "<details style='margin-top: 20px;'>";
    echo "<summary style='cursor: pointer; color: #666;'>تفاصيل تقنية (للمطورين)</summary>";
    echo "<pre style='background: #f5f5f5; padding: 10px; border-radius: 5px; font-size: 12px;'>";
    echo "Method: " . $method . "\n";
    echo "API Response:\n" . print_r($res, true);
    echo "</pre>";
    echo "</details>";
    echo "</div>";
}
?>