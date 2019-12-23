const express = require('express');
const router = express.Router();
const chargebee = require('chargebee');
const moment = require('moment');
moment().format();

chargebee.configure({site : process.env.site,
  api_key : process.env.api_key});
const examplehook = {
    "id": "ev_1sjs9ZNQS5ZqJIeBr",
    "occurred_at": 1502540268,
    "source": "scheduled_job",
    "object": "event",
    "api_version": "v2",
    "content": {
        "subscription": {
            "id": "1mkVvvQQMKsrmvkf3",
            "customer_id": "1mkVvvQQMKsrmvkf3",
            "plan_id": "17-dog-basic-monthly",
            "plan_quantity": 1,
            "plan_unit_price": 1800,
            "billing_period": 1,
            "billing_period_unit": "month",
            "plan_free_quantity": 0,
            "status": "active",
            "current_term_start": 1502540265,
            "current_term_end": 1505218665,
            "next_billing_at": 1505218665,
            "created_at": 1497269865,
            "started_at": 1497269865,
            "activated_at": 1497269865,
            "affiliate_token": "ieJ3v1B8LsPNtoeyAkLX9KJXVnTSeQgB",
            "created_from_ip": "66.42.160.242",
            "updated_at": 1502540268,
            "has_scheduled_changes": false,
            "resource_version": 1502540268660,
            "deleted": false,
            "object": "subscription",
            "currency_code": "USD",
            "due_invoices_count": 0,
            "mrr": 1800,
            "exchange_rate": 1.0,
            "base_currency_code": "USD",
            "cf_pet_name": "Walter",
            "cf_pet_age": 4,
            "cf_i_understand_this_plan_is_not_insurance": "True",
            "cf_i_understand_the_cancellation_policy": "True",
            "cf_i_was_informed_of_the_auto_reenroll_process": "True"
        },
        "customer": {
            "id": "1mkVvvQQMKsrmvkf3",
            "first_name": "Drey",
            "last_name": "Armstrong",
            "email": "Drey_100@yahoo.com",
            "phone": "5134446794",
            "auto_collection": "on",
            "net_term_days": 0,
            "allow_direct_debit": false,
            "created_at": 1497269865,
            "created_from_ip": "66.42.160.242",
            "taxability": "taxable",
            "updated_at": 1497269868,
            "resource_version": 1497269868940,
            "deleted": false,
            "object": "customer",
            "billing_address": {
                "first_name": "Drey",
                "last_name": "Armstrong",
                "email": "Drey_100@yahoo.com",
                "phone": "5134446794",
                "line1": "105 Farragut Road",
                "city": "Cincinnati",
                "state_code": "OH",
                "state": "Ohio",
                "country": "US",
                "zip": "45218",
                "validation_status": "not_validated",
                "object": "billing_address"
            },
            "card_status": "valid",
            "primary_payment_source_id": "pm_2smoc9JpQMKtmAkmE2",
            "payment_method": {
                "object": "payment_method",
                "type": "card",
                "reference_id": "cus_ApWXFRYEwPwgFF/card_1ATrUMApOF5igul1K2GdFqFE",
                "gateway": "stripe",
                "gateway_account_id": "gw_2shLHbOPQ3C8Xok8q2",
                "status": "valid"
            },
            "promotional_credits": 0,
            "refundable_credits": 0,
            "excess_payments": 0,
            "unbilled_charges": 0,
            "preferred_currency_code": "USD",
            "cf_clinic_location": "Colerain, OH",
            "cf_clinic_account_number": "454121",
            "cf_drivers_license_number": "TR042939",
            "cf_pet_owners_date_of_birth_mmddyyyy": "050291",
            "cf_enrolled_by": "Kec"
        },
        "card": {
            "status": "valid",
            "gateway": "stripe",
            "gateway_account_id": "gw_2shLHbOPQ3C8Xok8q2",
            "first_name": "Drey",
            "last_name": "Armstrong",
            "iin": "443044",
            "last4": "0104",
            "card_type": "visa",
            "funding_type": "debit",
            "expiry_month": 12,
            "expiry_year": 2020,
            "issuing_country": "US",
            "billing_addr1": "105 Farragut Road",
            "billing_city": "Cincinnati",
            "billing_state_code": "OH",
            "billing_state": "Ohio",
            "billing_country": "US",
            "billing_zip": "45218",
            "ip_address": "66.42.160.242",
            "object": "card",
            "masked_number": "************0104",
            "customer_id": "1mkVvvQQMKsrmvkf3",
            "payment_source_id": "pm_2smoc9JpQMKtmAkmE2"
        },
        "invoice": {
            "id": "17251",
            "customer_id": "1mkVvvQQMKsrmvkf3",
            "subscription_id": "1mkVvvQQMKsrmvkf3",
            "recurring": true,
            "status": "paid",
            "price_type": "tax_exclusive",
            "date": 1502540265,
            "due_date": 1502540265,
            "net_term_days": 0,
            "exchange_rate": 1.0,
            "total": 1800,
            "amount_paid": 1800,
            "amount_adjusted": 0,
            "write_off_amount": 0,
            "credits_applied": 0,
            "amount_due": 0,
            "paid_at": 1502540267,
            "updated_at": 1502540268,
            "resource_version": 1502540268637,
            "deleted": false,
            "object": "invoice",
            "first_invoice": false,
            "has_advance_charges": false,
            "currency_code": "USD",
            "base_currency_code": "USD",
            "tax": 0,
            "line_items": [{
                "id": "li_1sjs9ZNQS5ZpnPeBi",
                "date_from": 1502540265,
                "date_to": 1505218665,
                "unit_amount": 1800,
                "quantity": 1,
                "is_taxed": false,
                "tax_amount": 0,
                "object": "line_item",
                "subscription_id": "1mkVvvQQMKsrmvkf3",
                "amount": 1800,
                "description": "Dog Basic Monthly",
                "entity_type": "plan",
                "entity_id": "17-dog-basic-monthly",
                "tax_exempt_reason": "tax_not_configured",
                "discount_amount": 0,
                "item_level_discount_amount": 0
            }],
            "sub_total": 1800,
            "linked_payments": [{
                "txn_id": "txn_1sjs9ZNQS5ZpofeBj",
                "applied_amount": 1800,
                "applied_at": 1502540268,
                "txn_status": "success",
                "txn_date": 1502540267,
                "txn_amount": 1800
            }],
            "applied_credits": [],
            "adjustment_credit_notes": [],
            "issued_credit_notes": [],
            "linked_orders": [],
            "billing_address": {
                "first_name": "Drey",
                "last_name": "Armstrong",
                "email": "Drey_100@yahoo.com",
                "phone": "5134446794",
                "line1": "105 Farragut Road",
                "city": "Cincinnati",
                "state_code": "OH",
                "state": "Ohio",
                "country": "US",
                "zip": "45218",
                "validation_status": "not_validated",
                "object": "billing_address"
            },
            "notes": [{"note": "For Customer Support Email WellPlans&#64;noahsark.vet"}]
        }
    },
    "event_type": "subscription_renewed",
    "webhook_status": "not_configured"
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express-Node' });
});
router.post('/chargebee2', function(req, res, next) { //this endpoint moves customers to 2017 plans
  if (req.body.event_type == "subscription_renewed") {
    const start_date = req.body.content.subscription.created_at * 1000; //chargebee gives the time in seconds
    const one_year_from_start = moment(start_date).add(1, 'years'); //compare with only the date not time
    const today = moment();
    const subscription_id = req.body.content.subscription.id;
    console.log(subscription_id)
    if (req.body.content.subscription.remaining_billing_cycles == null){

      console.log("No remaining_billing_cycles detected");
      console.log("Start Date:",moment(start_date))
      console.log("today: ", today,"one_year_from_start: ",one_year_from_start)
      if (today >= one_year_from_start) {
        handleUpgrade();
      }else{
        console.log("Not 1 year old yet");
        res.send('ok').status(200);
      }
    }else{
      console.log("Did not meet date criteria");
          res.send('ok').status(200);
    }
    function handleUpgrade() {
      if (req.body.content.subscription.plan_id === 'dog-basic-monthly') {
        let plan_to_update_to = '17-dog-basic-monthly';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if(req.body.content.subscription.plan_id === 'dog-basic-total') {
        let plan_to_update_to = '17-dog-basic-total';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'dog-plus-monthly') {
        let plan_to_update_to = '17-dog-plus-monthly';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'dog-plus-total') {
        let plan_to_update_to = '17-dog-plus-total-2';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'senior-dog-basic-monthly') {
        let plan_to_update_to = '17-senior-dog-basic-monthly';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'senior-dog-basic-total') {
        let plan_to_update_to = '17-senior-dog-basic-total';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'senior-dog-plus-monthly') {
        let plan_to_update_to = '17-senior-dog-plus-monthly';
        upgradeSub(subscription_id, plan_to_update_to)

      }else if (req.body.content.subscription.plan_id === 'senior-dog-plus-total') {
        let plan_to_update_to = '17-senior-dog-basic-total';
        upgradeSub(subscription_id, plan_to_update_to)

      }else{
        console.log("Was not one of the required plans.")
        res.send('ok').status(200);
      }

    }

    function upgradeSub(subscription_id, newPlan) {
      chargebee.subscription.update(subscription_id, {
        plan_id : newPlan
      }).request(function(error, result){
        if(error){
          //handle error
          console.log(error);
          res.send('error').status(422);
        }else{
          console.log("subscription was set to upgrade.")
          console.log(result);
          res.send('ok').status(200);
        }
      });
    }
  }else{
    console.log("event was not subscription_renewed")
    res.send('ok').status(200);
  }
});

router.post('/chargebee', function(req, res, next) { // this endpoint handles upgrades to senior  
  console.log("Event Type:",req.body.event_type)

  if (req.body.event_type == "subscription_renewed") {
    const subscription_id = req.body.content.subscription.id;
    console.log("Age of pet:",req.body.content.subscription.cf_pet_age)
    if (req.body.content.subscription.cf_pet_age) {
      const pet_age = Number(req.body.content.subscription.cf_pet_age);
      const created_at = Number(req.body.content.subscription.created_at) * 1000;
      console.log("Pet Age:",pet_age);
      const start_date = moment(created_at); // the day the subscription was created
      const upgrade_date = start_date.add(7-pet_age, 'years'); //the date the dog needs to be upgraded
      console.log("Start Date:",moment(created_at));
      console.log("Upgrade Date:",upgrade_date);
      console.log("Current Plan:",req.body.content.subscription.plan_id);
      if(moment() >= upgrade_date && req.body.content.subscription.plan_id.indexOf("senior") == -1){
        console.log("The dog should be upgraded.")
        var plans = {
          "dental-total": "senior-dental-total",
          "dental-upgrade": "senior-dental-upgrade",
          "dog-basic-monthly": "senior-dog-basic-monthly",
          "dog-basic-total": "senior-dog-basic-total",
          "dog-plus-monthly": "senior-dog-plus-monthly",
          "dog-plus-total" : "senior-dog-plus-total",
          "17-dog-basic-monthly":	"17-senior-dog-basic-monthly",
          "17-dog-basic-total":	"17-senior-dog-basic-total",
          "17-dog-plus-monthly":	"17-senior-dog-plus-monthly",
          "17-dog-plus-total":	"17-senior-dog-plus-total",
          "cat-monthly":	"senior-cat-monthly",
          "cat_total":	"Senior_cat_total",
          "FW_17-dog-basic-monthly":	"FW_17-senior-dog-basic-monthly",
          "FW_17-dog-basic-total":	"FW_17-senior-dog-basic-total",
          "FW_17-dog-plus-monthly":	"FW_17-senior-dog-plus-monthly",
          "FW_17-dog-plus-total":	"FW_17-senior-dog-plus-total",
          "FW_17-dog-plus-total-2":	"FW_17-senior-dog-plus-total",
          "FW_cat-monthly":	"FW_senior-cat-monthly",
          "FW_cat_total":	"FW_Senior_cat_total",
        };

        const planId = req.body.content.subscription.plan_id;
        const newPlan = plans[planId];
        console.log("Upgrade Plan",newPlan)
        if(newPlan){
          upgradeSub(subscription_id, newPlan)
        }else{
          console.log("No senior Plan for current plan.")
          res.send('ok').status(200);
        }
      }else{
        console.log("The dog is too young or already senior Plan.")
        res.send('ok').status(200);
      }

    }else{
      console.log("pet age field did not exist.")
      res.send('ok').status(200);
    }
  }else{
    console.log("event was not subscription_renew")
    res.send('ok').status(200);
  }
  function upgradeSub(subscription_id, newPlan) {
    chargebee.subscription.update(subscription_id, {
      plan_id : newPlan
    }).request(function(error, result){
      if(error){
        //handle error
        console.log(error);
        res.send('error').status(422);
      }else{
        console.log("subscription was set to upgrade.")
        console.log(result);
        res.send('Subscription was upgraded').status(200);
      }
    });
  }
});

router.get('/chargebee_senior_manual_upgrade/:subscription_id', function(req, res, next) { 
  console.log(req.params.subscription_id);
  const subscription_id = req.params.subscription_id;
  chargebee.subscription.retrieve(subscription_id).request(function(error,result) {
      if(error){
        res.send('error').status(422);
      }else{
        console.log("subscription get success!");
        var subscription = result.subscription;
        if (subscription.cf_pet_age) {
          const pet_age = Number(subscription.cf_pet_age);
          const created_at = Number(subscription.created_at) * 1000;
          console.log("Pet Age:",pet_age);
          const start_date = moment(created_at); // the day the subscription was created
          const upgrade_date = start_date.add(7-pet_age, 'years'); //the date the dog needs to be upgraded
          console.log("Start Date:",moment(created_at));
          console.log("Upgrade Date:",upgrade_date);
          console.log("Current Plan:",subscription.plan_id);
          if(moment() >= upgrade_date && subscription.plan_id.indexOf("senior") == -1){
            console.log("The dog should be upgraded.")
            var plans = {
              "dental-total": "senior-dental-total",
              "dental-upgrade": "senior-dental-upgrade",
              "dog-basic-monthly": "senior-dog-basic-monthly",
              "dog-basic-total": "senior-dog-basic-total",
              "dog-plus-monthly": "senior-dog-plus-monthly",
              "dog-plus-total" : "senior-dog-plus-total",
              "17-dog-basic-monthly":	"17-senior-dog-basic-monthly",
              "17-dog-basic-total":	"17-senior-dog-basic-total",
              "17-dog-plus-monthly":	"17-senior-dog-plus-monthly",
              "17-dog-plus-total":	"17-senior-dog-plus-total",
              "cat-monthly":	"senior-cat-monthly",
              "cat_total":	"Senior_cat_total",
              "FW_17-dog-basic-monthly":	"FW_17-senior-dog-basic-monthly",
              "FW_17-dog-basic-total":	"FW_17-senior-dog-basic-total",
              "FW_17-dog-plus-monthly":	"FW_17-senior-dog-plus-monthly",
              "FW_17-dog-plus-total":	"FW_17-senior-dog-plus-total",
              "FW_17-dog-plus-total-2":	"FW_17-senior-dog-plus-total",
              "FW_cat-monthly":	"FW_senior-cat-monthly",
              "FW_cat_total":	"FW_Senior_cat_total",
            };

            const planId = subscription.plan_id;
            const newPlan = plans[planId];
            if(newPlan){
              upgradeSub(subscription_id, newPlan)
            }else{
              res.send('No senior Plan for current plan.').status(200);
            }
          }else{
            res.send('The dog is too young or already senior Plan.').status(200);
          }
        }else{
          res.send('pet age field did not exist.').status(200);
        }
      }
  });
  function upgradeSub(subscription_id, newPlan) {
    chargebee.subscription.update(subscription_id, {
      plan_id : newPlan
    }).request(function(error, result){
      if(error){
        res.send('Subscription Upgrade issue').status(422);
      }else{
        res.send('Subscription was upgraded').status(200);
      }
    });
  }
});

router.get('/chargebee_subscriptions', function(req, res, next) {
  var senior_list = ["senior-dental-total","senior-dental-upgrade","senior-dog-basic-monthly","senior-dog-basic-total","senior-dog-plus-monthly","senior-dog-plus-total","17-senior-dog-basic-monthly","17-senior-dog-basic-total","17-senior-dog-plus-monthly","17-senior-dog-plus-total","senior-cat-monthly","Senior_cat_total","FW_17-senior-dog-basic-monthly","FW_17-senior-dog-basic-total","FW_17-senior-dog-plus-monthly","FW_17-senior-dog-plus-total","FW_17-senior-dog-plus-total","FW_senior-cat-monthly","FW_Senior_cat_total"];
  var result_list = [];
  var offset = "";
  while(true){
    chargebee.subscription.list({
      offset : '["1555456741000","17165785"]',
      limit : 100,
      "plan_id[in]" : senior_list,
      "status[in]" : ["active"]
    }).request(function(error,result) {
      if(error){
        res.send(error).status(422);
      }else{
        
        var subscription_list = result.list;
        subscription_list.forEach(element => {
          if (element.subscription.cf_pet_age) {
            const pet_age = Number(element.subscription.cf_pet_age);
            var created_at = Number(element.subscription.created_at) * 1000;
            const start_date = moment(created_at); // the day the subscription was created
            const upgrade_date = start_date.add(7-pet_age, 'years'); //the date the dog needs to be upgraded
            if(moment() < upgrade_date){
              element.subscription['created_at'] = created_at;
              result_list.push(element.subscription);
            }
          }
        });
        if ('next_offset' in myObj){
          offset = result.next_offset;
          console.log(result.next_offset);
        }
        
        // res.send(result_list).status(200);
        res.render('subscription', { subscriptions: result_list });
      }
    });
  }
});


module.exports = router;
