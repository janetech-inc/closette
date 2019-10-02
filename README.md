# Buyer XP [![CircleCI](https://circleci.com/gh/cxnfashion/buyer-xp/tree/master.svg?style=svg&circle-token=69ecfe778395d914138f4c0932fc1bb62372ed0c)](https://circleci.com/gh/cxnfashion/buyer-xp/tree/master)

CXN - Buyer Experience App

## Getting Started

##### Clone and Check Into the Project Repo

```javascript
git clone git@github.com:cxnfashion/buyer-xp.git
cd buyer-xp
```

##### Install Node & NPM

```
brew install node
```

##### Install the Required NPM Packages

```
npm install
```

#### Additional Terraform Setup

Buyer XP uses Terraforms (located in the `terraforms/` directory) to manage single time setup of AWS resources. If you've added or edited a resource and need to run these terraforms you will first need to add a few steps to your environment setup.

##### Install Terraform

```
brew install terraform@0.11
```

##### Install the AWS CLI

Install the AWS CLI via the [bundled installer](https://docs.aws.amazon.com/cli/latest/userguide/install-bundle.html). Note: if you already contribute to [Catalog Service](https://github.com/cxnfashion/catalog-svc), or another CXN project you may have this installed already. You can verify it has been installed correctly by running:

```
aws --version
```

<br/>

---

<br/>

## Contributing to the Buyer XP App

##### Linting/Formatting

... coming soon

##### AWS Resource Setup

Our AWS Resources and environments for the Buyer XP app are managed by a one time setup via terraform. 

The resources are defined in `terraforms/teraform.tf` and supporting cloudformation templates are defined in the `terraforms/cloudformations/` folder. If you would like to add a new resource to our AWS setup you will need to add it to the `terraforms/terraform.tf` file, then run `terraform plan` to generate and view the execution plan, and `terraform apply` to apply the changes specified in the excecution plan. 

For more details please refer to the [Terraform Documentation](https://www.terraform.io/docs/index.html). If this is your first time using Terraform please see Hashicorp's [Learn Terraform](https://learn.hashicorp.com/terraform/) guide.